import { useForm } from "react-hook-form";
import { AuthLayout } from "@/components";
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/context";
import { useRouter } from "next/router";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isOk, setIsOk] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<RegisterForm>();
  const { registerUser } = useContext(AuthContext);
  const router = useRouter();

  const onSubmit = async (data: RegisterForm) => {
    const { name, email, password } = data;
    const ok = await registerUser(name, email, password);
    if (!ok) {
      setIsOk(false);
      setErrorMessage("El email ya está registrado");
      setTimeout(() => {
        setIsOk(true)
        setErrorMessage("");
      }, 3000); 
    } else {
      setIsOk(true);
      router.push("/");
    }
  };

  return (
    <div>
      <AuthLayout
        title="Register"
        pageDescription="El usuario debe crearse una cuenta para continuar"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-semibold text-slate-50 mt-9 mb-1">
            Register
          </h1>
          <form
            className="w-1/2 h-[80vh] border-[1px] border-slate-50 flex flex-col items-center justify-center shadow-lg rounded-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            {!isOk && (
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-light text-red-500 mb-1">
                  {errorMessage}
                </h1>
              </div>
            )}
            <input
              className="rounded-md px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-slate-700 w-1/2 text-slate-50"
              type="text"
              placeholder="Nombre"
              {...register("name", {
                required: { value: true, message: "El nombre es requerido" },
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
            <input
              className="rounded-md px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-slate-700 w-1/2 text-slate-50"
              type="text"
              placeholder="user@email.com"
              {...register("email", {
                required: { value: true, message: "El email es requerido" },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "El email debe ser válido",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            <input
              className="rounded-md px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-slate-700 w-1/2 text-slate-50"
              type="password"
              placeholder="***************"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
            <button className="mt-10 text-slate-50 border px-10 rounded-lg p-1 w-1/2 hover:bg-slate-700">
              Register
            </button>

            <Link href="/auth/login" passHref legacyBehavior>
              <a className="text-slate-50 absolute bottom-32 right-96 underline">
                ¿ya tienes cuenta?
              </a>
            </Link>
          </form>
        </div>
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
