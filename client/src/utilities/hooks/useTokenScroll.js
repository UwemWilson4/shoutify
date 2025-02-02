// eslint-disable-next-line
import React, { useState, useRef, useCallback } from 'react';
import requestWithToken from '../requestWithToken';

function useTokenScroll(setList, token, source){
    const [next, setNext] = useState(null) 

    const observer = useRef()
    const lastRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && next){
                requestWithToken(next, token, source)
                    .then(response => {
                        const data = response.data
                        const resultList = data.items.map(track => track.track)
                        const next = data.next || data.playlists.next
                        setList(tracks => [...tracks, ...resultList])
                        setNext(next)
                    })
                    .catch(error => console.log(error))
            }
        })
        if (node) observer.current.observe(node)
    // eslint-disable-next-line
    }, [next])

    return [setNext, lastRef]
}

export default useTokenScroll