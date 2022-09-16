const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3ed68760cmshc7058e5854779dap1c7207jsn1e3daa1f06cc',
		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
	}
};

export const getData  = async () =>{
    const data = await fetch('https://movies-app1.p.rapidapi.com/api/movies', options); 
    const dataJSON = data.json(); 
    return dataJSON; 
}