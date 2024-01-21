import './style.css'
export default function Footer() {
    return (
        <div className='conjunto_rodape'>

            <div className='creditos_rodape'>
                <h1 className='titulo_rodape'>Desenvolvido por:</h1>

                <ul>
                    <li><a href="https://www.instagram.com/bru.no_lima" className='link'><span className='cor_destaque_link'>@bru.no_lima</span></a>Bruno Lima</li>
                    <li><a href="https://www.instagram.com/heric_viana_s/" className='link'><span className='cor_destaque_link'>@heric_viana_s</span></a>Heric Virgilio</li>
                    <li><a href="https://www.instagram.com/claudio.pales" className='link'><span className='cor_destaque_link'>@claudio.pales</span></a>Claudio Pales</li>
                    <li><a href="https://www.instagram.com/jpales_" className='link'><span className='cor_destaque_link'>@jpales_</span></a>João Pedro Pales</li>
                </ul>
            </div>
        </div>
    )

}