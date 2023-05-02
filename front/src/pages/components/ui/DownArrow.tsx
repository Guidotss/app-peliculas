import Image from "next/image"

export const DownArrow = () => {
  return (
    <Image
        src="/downArrow.png"
        alt="Down Arrow"
        width={20}
        height={20}
        loading="lazy"
    />
  )
}