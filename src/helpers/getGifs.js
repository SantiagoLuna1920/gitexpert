

export const GetGifs = async( category ) => {
        
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=1CrnyKB7zhLVnoyiiWu7a6biqxBWHBUe`
const resp = await fetch( url );
const {data} = await resp.json();

const gifs = data.map( img => {
    return {
        id: img.id,
        url: img.images.downsized.url,
        title: img.title
    }
} )
       return gifs;
    } catch (error) {
        console.log("No se pudo conectar al api")
    }
}