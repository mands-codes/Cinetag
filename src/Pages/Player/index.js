import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'Pages/NaoEncontrada';
function Player(){
const [video, setVideo] = useState();

    const parametros = useParams();

    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/mands-codes/cinetag-api/videos?=${parametros.id}`)
        .then(resposta=> resposta.json())
        .then(dados=>{
            setVideo(...dados)
        })
    }, [])
    
if(!video){
    return <NaoEncontrada />
}

    return(
        <Fragment>
            <Banner imagem="player"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section>
                <iframe 
                width="100%" 
                height="100%" 
                src={video.link}
                title={video.titulo} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
            </section>
        </Fragment>
    )
}


export default Player;