import React from 'react'
import './Threads.css'

const Threads = props => {
    return (
        <div className="Threads">
            <div className="Threads-content">
                <div className="Threads-item">
                    <div>
                        <a href="http://google.com"><img width="64" height="64" src="https://cdn.vox-cdn.com/thumbor/HIluJzxPz3qH66lFxxHKVl10UzQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/60211577/acastro_180403_1777_youtube_0001.0.jpg" alt="thumbnail" /></a>
                    </div>
                    <div>
                        <h1><a href="http://google.com">Título da parada bem grande assim mais ou menos</a></h1>
                        <p>enviado a 6 horas <strong>por</strong> <a href="http://google.com">usuário_nickname</a></p>
                        <a href="http://dominio.io">dominio.io</a>
                    </div>
                </div>
            </div>

            <button>+ Ver mais</button>
        </div>
    )
}

export default Threads
