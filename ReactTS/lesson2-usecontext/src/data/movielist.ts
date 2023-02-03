interface movielistType{
    id:string,
    title:string,
    price:number,
    img:string
}

const movielist:movielistType[] = [
    {
        id:"1",
        title:"Batman Lego",
        price:20,
        img:"https://m.media-amazon.com/images/I/91j9MahJXAL._AC_SY679_.jpg"
    },
    {
        id:"2",
        title:"Interstaller",
        price:25,
        img:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        id:"3",
        title:"Book of Henry",
        price:15,
        img:"https://m.media-amazon.com/images/M/MV5BMTYwNTc0NTM2NF5BMl5BanBnXkFtZTgwNjkyMjg4MTI@._V1_.jpg"
    }
]

export default movielist;