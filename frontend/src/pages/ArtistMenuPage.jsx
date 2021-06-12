import React from 'react';
import { Link } from 'wouter';
import Routes from '../constants/routes';

import Header from '../components/Header/Header';
import Box from '../components/Box/Box';


export default function ArtistMenu(){
    return (
        <>
        <Header></Header>
            <div className="flex flex-center">
                
                <div className="pad">
                    <div>
                        <Link href={ Routes.myalbums } className="btn btn-transparent width-100">Ver Albumes</Link>
                    </div>
                    <div>
                        <Link href={ Routes.albumcreate } className="btn btn-transparent down width-100">Crear Album</Link>
                    </div>
                    <div>
                        <Link href={ Routes.uploadsong } className="btn btn-transparent down width-100">Subir Canción</Link>
                    </div>
                </div>
            </div>
        </>
    );
}