import React, {useState} from 'react'
import bannerImg from '../assets/auto_banner.jpg'
import badge from '../assets/suzuki_badge.jpg'
import spressoLogo from '../assets/new_spresso_logo.png'
import sixty from '../assets/60 CUOTAS.png'
import corridas from '../assets/corridas DE 236 USD.png'
import suv from '../assets/SUV SUPER COMPACTO.png'
import nuevoSpresso from '../assets/nuevo s.presso.png'
import autoNegro from '../assets/auto_negro.png'
import personas from '../assets/personas.jpg'
import interiorNegro from '../assets/interior-negro.png'
import fondoAutoRojo from '../assets/foto_auto_rojo.jpg'
import especificaciones from '../assets/ESPECIFICACIONES TÉCNICAS.png'
import motor from '../assets/motor.png'
import airbag from '../assets/airbag.png'
import sensor from '../assets/sensor.png'
import titleColores from '../assets/COLORES.png'
import titleDisponibles from '../assets/DISPONIBLES.png'
import autoRojo from '../assets/rojo.png'
import autoAzul from '../assets/azul_perlado.png'
import autoBlanco from '../assets/blanco.png'
import autoPlata from '../assets/plata.png'
import autoGranito from '../assets/gris_granito.png'
import ss from '../assets/ss.png'
import nosComunicamos from '../assets/nos comunicamos.png'
import conTigo from '../assets/contigo.png'

import "./Landing.css"

const Landing = (props) => {

    const
        [name, setName] = useState(''),
        [lastName, setLastName] = useState(''),
        [phone, setPhone] = useState(''),
        [email, setEmail] = useState(''),
        [isSending, setIsSending] = useState(false);


    const submitForm = async () => {
        setIsSending(true);
        const payload = {
            "your-name": name,
            "your-lastname": lastName,
            "your-email": email,
            "your-phone": phone
        };
        let formBody = [];
        for (let property in payload) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(payload[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const data = await fetch(
            'https://www.suzuki.com.py/wp-json/contact-form-7/v1/contact-forms/2724/feedback',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            });

        const json_data = await data.json();
        window.alert(json_data.message);
        setIsSending(false);
    }

    return (
        <>
            <div className="banner" style={{backgroundImage: `url(${bannerImg})`}}>
                <div className="brands">
                    <div className="suzuki-badge">
                        <img src={badge} alt="suzuki"/>
                    </div>
                    <div className="spresso-logo">
                        <img className='main-spresso' src={spressoLogo} alt="New S-Presso"/>
                        <img className='suv-compacto' src={suv} alt="New S-Presso"/>
                    </div>
                </div>
                <div className="cuotas">
                    <img src={sixty} alt=""/>
                    <div className="corridas">
                        <img src={corridas} alt=""/>
                    </div>
                </div>
            </div>

            <div className="container white">
                <section >

                    <div className="grid-2 hasoverlay">
                        <div className="item">
                            <img src={nuevoSpresso} className='title' alt="Nuevo S.PRESSO "/>
                            <p>
                                Con el nuevo Suzuki S.Presso, <br/>
                                cualquier momento esta lleno de <br/>
                                aventura y diversión.
                            </p>
                            <p>
                                Su excelente rendimiento te permitirá <br/>
                                recorrer la ciudad sin problemas. <br/>
                                Animate a romper la rutina cuando <br/>
                                quieras gracias a su gran <br/>
                                eficiencia, espacio <br/>
                                y diseño.
                            </p>
                        </div>
                        <div className="item">
                            <img src={personas} className='personas' alt=""/>
                        </div>
                    </div>
                    <div className="car-over">
                        <img src={autoNegro} alt=""/>
                    </div>
                    <div className="grid-2">
                        <div className="item">
                            <img src={interiorNegro} alt=""/>
                        </div>
                        <div className="item">
                           <p>
                               Descubrí el nuevo S.Presso, el primer SUV <br/>
                               compacto de Suzuki. En el momento en que <br/>
                               subes al S.PRESSO, tus ojos se posan <br/>
                               instantáneamente en su exclusivo tablero <br/>
                               central que alberga un moderno velocímetro <br/>
                               digital.
                           </p>
                        </div>
                    </div>

                </section>


            </div>

            <div className="container np">
                <section className='especificaciones-section' style={ {background: `url(${fondoAutoRojo})`}}>
                    <img src={especificaciones} alt="" className="big-title"/>
                    <div className="grid-3">
                        <div className="item">
                            <h2>CONFORT Y EQUIPAMIENTO</h2>
                            <p>
                                Sensores ultra sónicos en el bumper
                                trasero. Los sonidos de advertencia
                                lo mantiene al tanto de la distancia
                                al obstáculo.
                            </p>

                        </div>
                        <div className="item">
                            <h2>SEGURIDAD</h2>
                            <p>
                                Frenos Disco Ventilado al frente y
                                Tambor para atrás; SRS Sistema de
                                Bolsas de Aire.
                            </p>

                        </div>

                        <div className="item">
                            <h2>MOTOR</h2>
                            <p>
                                Multipunto de 998cc que ofrece una
                                mayor eficiencia de combustible, lo
                                que le permite hacer un esfuerzo
                                adicional.
                            </p>

                        </div>
                    </div>
                    <div className="grid-3">
                        <div className="item">

                            <div className="descriptive-img">
                                <img src={sensor} alt=""/>
                            </div>
                        </div>
                        <div className="item">

                            <div className="descriptive-img">
                                <img src={airbag} alt=""/>
                            </div>
                        </div>

                        <div className="item">

                            <div className="descriptive-img">
                                <img src={motor} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="colores" style={ {background: `url(${ss})`}}>
                    <div className="colores-title">
                        <img src={titleColores} alt="" className='main-title'/> <br/>
                        <img src={titleDisponibles} alt="" className='sub-title'/>
                    </div>
                    <div className="colores-grid-2">
                        <div className="item">
                            <img src={autoRojo} alt="" />
                            <p>Rojo</p>
                        </div>
                        <div className="item">
                            <img src={autoAzul} alt="" />
                            <p>Azul Claro Perlado</p>
                        </div>
                    </div>
                    <div className="colores-grid-3">
                        <div className="item">
                            <img src={autoBlanco} alt="" />
                            <p>Blanco</p>
                        </div>
                        <div className="item">
                            <img src={autoPlata} alt="" />
                            <p>Plata</p>
                        </div>
                        <div className="item">
                            <img src={autoGranito} alt="" />
                            <p>Gris Granito</p>
                        </div>
                    </div>
                </section>

                <section className="colores"  style={ {background: `url(${ss})`} }>
                    <div className="colores-title">
                        <img src={nosComunicamos} alt="" className='main-title'/> <br/>
                        <img src={conTigo} alt="" className='sub-title'/>
                    </div>
                    <div className="form">
                        <div className="half">
                            <input type="text" placeholder={'Nombres'} onChange={ (e) => { setName(e.target.value) }} />
                            <input type="text" placeholder={'Apellidos'} onChange={ (e) => { setLastName(e.target.value) }}/>
                        </div>
                        <div className="one">
                            <input type="text" placeholder={'Email'} onChange={ (e) => { setEmail(e.target.value) }}/>
                        </div>

                        <div className="one">
                            <input type="text" placeholder={'Celular'} onChange={ (e) => { setPhone(e.target.value) }}/>
                        </div>

                        { !isSending && <input type="submit" value='Enivar Mensaje' onClick={ () => {
                            submitForm();
                        } }/>}

                        { isSending && <input type="submit" value='Enviando Mensaje'/>}

                    </div>

                    <div className="footer">
                        <p>
                            <b>Avda. Rca. Argentina:</b> N&deg; 900 esq.
                            López Moreira WhatsApp: 0984 600 501 <br/>
                            Telefax: 021 600 700 - Asunción, Paraguay
                        </p>
                        <p>
                            <b>Sucursal Artigas:</b> a 2 cuadras del Botánica,
                            Tel: 021 297 610.
                        </p>
                        <p>
                            <b>Avda. Mariscal López esq. Santa Teresa, Asunción:</b>
                            Tel.: 676 606 / 0986 600 794
                        </p>
                        <p>
                            <b>CDE:</b> 061 512 774 / <b>Encarnación:</b> 0971 204 541
                        </p>
                        <p>
                            <b>Campo 9:</b> Ruta Int. N&deg; 7 KM 213, J.E. Estigarriba, Tel.: 0528 222 272 - 0972 222 729
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Landing