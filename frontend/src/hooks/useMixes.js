import React,{ useCallback, useContext } from 'react'
import SongContext from '../context/SongContext';
import { getMixes, getCurrentTukkiMixSongs } from '../services/mixes.service';
import useUser from './useUser';

export default function useMixes(){

    const { tukkiMixes, setTukkiMixes, currentMix, setCurrentMix } = useContext(SongContext);

    const getMyMixes = useCallback(setLoading => {
        getMixes()
            .then(mixes => {
                setLoading && setLoading(false)
                setTukkiMixes(mixes);
            })
            .catch(err => console.error(err))
        ;
    },[ setTukkiMixes ]);

    const setMixes = useCallback(mixes => {
        setTukkiMixes(mixes);

    },[ setTukkiMixes ]);

    return {
        getMyMixes,
        tukkiMixes,
        setMixes,
        currentMix,
    }

}