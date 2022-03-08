import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Pipe } from "./Pipe";

function App() {
    return (
        <div className="App">
            <div className="pipe-wrapper">
                <Pipe size={130} y={0} />
                <Pipe size={115} y={1.2} bottom right />
                <Pipe size={80} y={2} bottom />
                <Pipe size={120} y={2.8} bottom right />
            </div>
            <header className="App-header">
                <img
                    src="/img/logo.png"
                    alt="22. Filmový Festival FI MU"
                    className="logo"
                />
                <div className="title">20. 5. 2022 | 19:00</div>
                <div className="subtitle">
                    přihlašování filmů možné do 19. 4. 2022
                </div>
                <div className="button-replace-me">Přihlásit se</div>
            </header>
            {/* The whole body should be replaced with the content of the page... do not even keep the styles, it is just for preview */}
            <div className="body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sit amet elementum diam. Vestibulum suscipit velit sit
                    amet tellus ultrices elementum. Fusce eu mauris semper,
                    convallis mi a, finibus nunc. Duis quis mi leo. Ut viverra
                    sem sed bibendum viverra. In dolor magna, varius in turpis
                    nec, condimentum finibus neque. Nunc at eros id lorem auctor
                    consequat. Quisque convallis condimentum risus, nec rutrum
                    nibh ultricies ac.
                </p>
                <p>
                    Aenean elit dui, scelerisque non ex et, ullamcorper
                    tristique ligula. Suspendisse pretium metus in enim varius
                    euismod. Praesent et tincidunt velit, ut dignissim neque.
                    Donec consectetur venenatis quam, in mattis mi tristique ac.
                    Curabitur non commodo purus. Fusce eu ullamcorper mi.
                    Suspendisse magna tortor, sodales consectetur finibus ac,
                    accumsan vel mi. Aenean quis eros eu dolor viverra tempus at
                    tempor est. Sed volutpat, metus et pharetra pharetra, eros
                    odio faucibus mi, tempor dapibus mauris libero non dolor.
                    Vestibulum dui dolor, porta vehicula nulla non, ultrices
                    pellentesque tortor.
                </p>
                <p>
                    Etiam iaculis mauris nec maximus pulvinar. Mauris eu pretium
                    enim. Vivamus gravida ex et molestie interdum. Donec
                    dignissim sodales dictum. Phasellus et suscipit ex. Mauris
                    eget dapibus quam. Aliquam erat volutpat.
                </p>
                <p>
                    Proin luctus neque et tristique pharetra. Sed fringilla
                    molestie sollicitudin. Mauris vel tortor sed arcu tincidunt
                    auctor bibendum in dui. Vivamus et lorem ac libero dictum
                    semper sit amet nec ante. Suspendisse ullamcorper elit id
                    lorem vestibulum, sit amet luctus dui ultrices. Cras diam
                    dolor, tempus id neque sed, dapibus scelerisque eros. Nullam
                    quis convallis purus.
                </p>
                <p>
                    Vivamus eget tellus sit amet massa tempor fermentum. Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Donec et velit justo. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Aliquam erat volutpat. Quisque eu
                    orci nisl. Nulla lectus elit, luctus a elementum et, congue
                    dignissim eros. Phasellus vulputate, odio non dictum
                    molestie, risus arcu consequat lorem, eu eleifend arcu dui
                    vitae arcu.
                </p>
                <p>
                    Nulla nibh libero, elementum sit amet vehicula a, efficitur
                    at arcu. Phasellus neque sem, volutpat fermentum auctor
                    semper, sagittis at mauris. Suspendisse tempus erat elit,
                    non fringilla justo pharetra ac. Nam id erat pulvinar,
                    hendrerit sem dictum, facilisis augue. Nullam nec libero vel
                    turpis venenatis consequat id sit amet nunc. Donec lacinia
                    augue sit amet massa varius elementum. Integer pharetra
                    neque non urna imperdiet pretium. In lobortis porttitor
                    auctor. Curabitur massa lacus, dignissim vel rutrum eget,
                    accumsan vehicula turpis. Phasellus posuere nisl id
                    malesuada lobortis. Quisque ultricies, neque sit amet
                    blandit dictum, urna eros gravida libero, vel malesuada eros
                    tortor quis urna. Morbi fermentum quam ac lacinia consequat.
                </p>
                <p>
                    Etiam eget ipsum turpis. Maecenas eu nunc nec sapien auctor
                    elementum. Nullam pulvinar pellentesque lorem et ultrices.
                    Nullam eget lacinia nisi, in ullamcorper nulla. Morbi eget
                    lorem porta, mollis quam nec, malesuada mi. Integer faucibus
                    id quam quis tincidunt. Donec id condimentum lectus. Cras
                    sit amet ligula lobortis, suscipit quam et, auctor enim. In
                    egestas arcu sed tortor convallis, vitae tristique tortor
                    venenatis. Sed blandit neque ac dui vestibulum, et malesuada
                    nisi commodo.
                </p>
                <p>
                    Aliquam erat velit, iaculis at risus eu, sollicitudin
                    blandit magna. Maecenas dapibus sem eros, ac volutpat mauris
                    posuere dignissim. In ullamcorper urna eget fermentum
                    ornare. Nunc interdum auctor enim. In id neque vitae eros
                    finibus bibendum. Duis commodo ullamcorper ante, vel
                    scelerisque elit ornare sed. Quisque malesuada posuere nibh
                    nec blandit.
                </p>
                <p>
                    Pellentesque fermentum eros at porttitor mattis. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Vestibulum nec dui neque.
                    Nam nec auctor mauris, et volutpat urna. Nam euismod metus
                    eros, eu egestas velit eleifend non. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Ut id lacus urna.
                    Pellentesque at turpis sit amet velit maximus tempus. Etiam
                    vitae mollis neque.
                </p>
                <p>
                    Aliquam erat volutpat. Nullam lacinia risus in libero
                    cursus, ut finibus ante rhoncus. Donec luctus elementum
                    felis et semper. Integer ac dictum sapien, eu condimentum
                    tortor. Sed nec lectus nec nulla tempor vulputate a vel
                    quam. Cras vitae vestibulum dui, eget rutrum dolor. Aenean
                    id nunc vel erat hendrerit rutrum. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Nam fringilla mattis
                    velit, ac ornare mi dignissim nec. Quisque ut massa dui.
                    Integer nec suscipit tortor.
                </p>
                <p>
                    Sed ultrices efficitur erat, sit amet molestie ante
                    ullamcorper eu. Sed libero odio, faucibus nec nunc euismod,
                    porttitor commodo enim. Nullam nisi quam, eleifend sed mi
                    eu, suscipit aliquet nulla. Duis egestas metus quis tellus
                    commodo, sed placerat velit rutrum. Proin pharetra urna eu
                    risus convallis, varius suscipit risus cursus. Praesent ac
                    urna elit. Sed nec tortor eget quam tristique varius. Etiam
                    nulla elit, porta vel auctor at, pulvinar faucibus nibh.
                    Nulla placerat, justo eget ultrices pretium, elit metus
                    lobortis turpis, egestas placerat velit ante ut dui. Cras
                    condimentum quam at tortor suscipit, et molestie urna
                    suscipit. Morbi velit ligula, blandit ut suscipit eget,
                    gravida rhoncus augue. Sed dapibus nisi nec magna convallis
                    condimentum. Phasellus sodales purus enim, non pellentesque
                    erat ullamcorper aliquet.
                </p>
                <p>
                    Nulla in tempus ipsum. Cras at velit non justo auctor
                    fringilla euismod in quam. Duis nisl massa, suscipit ac
                    lacus sit amet, tristique molestie lorem. Fusce non justo
                    sed arcu porta imperdiet eu et est. Mauris pulvinar interdum
                    mauris vel vestibulum. Suspendisse potenti. Phasellus
                    faucibus ante laoreet, lacinia ligula vel, facilisis lectus.
                    Donec velit nunc, tempor vitae ex id, scelerisque molestie
                    justo. Morbi aliquet nisl at quam ornare, vel convallis ex
                    pellentesque. Aenean rutrum pretium nulla.
                </p>
                <p>
                    Donec vel dapibus neque. Quisque efficitur mollis mi, eu
                    imperdiet augue dictum et. Etiam consectetur libero sed
                    convallis lacinia. Morbi ullamcorper non dolor a mollis.
                    Nulla finibus mi ipsum. Etiam ultrices ullamcorper turpis
                    eget elementum. Vivamus eu blandit elit. Suspendisse
                    potenti. Mauris pulvinar hendrerit posuere. Maecenas
                    efficitur sem vel lacus feugiat cursus. Proin et blandit
                    leo. Aliquam interdum lacus in libero aliquet, hendrerit
                    consectetur leo maximus. Vestibulum tempor tincidunt quam,
                    elementum pulvinar orci interdum in. Ut tempor dolor in
                    blandit luctus. Nam a nisl nec ligula fringilla accumsan.
                </p>
                <p>
                    Nulla facilisi. Nulla at facilisis turpis, rutrum pretium
                    turpis. Nullam vulputate porta sapien a aliquet. Nulla
                    viverra ultricies bibendum. Pellentesque venenatis, nisi sed
                    imperdiet suscipit, arcu tortor varius erat, nec sagittis
                    nisi libero et ligula. Maecenas fringilla dapibus diam a
                    posuere. Suspendisse gravida turpis non mauris eleifend
                    accumsan.
                </p>
                <p>
                    Mauris blandit, elit a pharetra tincidunt, nunc arcu aliquet
                    metus, in vestibulum mi ligula vitae nunc. Vivamus eget enim
                    tincidunt, lacinia elit id, posuere massa. Nullam lacinia
                    dictum magna, nec hendrerit dolor. Maecenas non diam
                    faucibus, malesuada dolor id, finibus enim. Aenean et semper
                    odio, id dapibus turpis. Sed id posuere purus. Vivamus
                    accumsan felis vel tortor dictum, non tincidunt massa
                    mattis.
                </p>
                <p>
                    Nullam non lectus tincidunt, convallis metus in, tristique
                    nibh. Praesent sapien orci, porttitor ac viverra at,
                    ullamcorper ultricies sapien. Curabitur sed diam mauris. Nam
                    auctor aliquet sapien sed venenatis. Aliquam sollicitudin
                    imperdiet libero, sed ultrices mi egestas eu. Proin bibendum
                    tristique luctus. Sed dapibus quam quis justo rhoncus, non
                    tincidunt nunc varius. Donec at mauris vitae enim rhoncus
                    ultricies. In fringilla consequat iaculis.
                </p>
                <p>
                    Mauris rutrum consectetur purus eget hendrerit. Aliquam
                    ornare ut justo eget lobortis. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Morbi sed arcu vestibulum diam consequat semper
                    quis in ipsum. Donec neque odio, imperdiet a elementum
                    vitae, varius non nulla. Donec euismod ultrices eleifend. In
                    eu lacus risus. Vivamus laoreet facilisis est vitae
                    efficitur. Proin vitae rutrum leo. Etiam sodales vehicula
                    mi, tristique lobortis magna malesuada a. In tincidunt
                    tellus non gravida egestas. Fusce lobortis in quam sed
                    lacinia. Vivamus eu sem nec purus molestie iaculis quis sed
                    felis. Morbi id eros elit. Donec egestas semper felis eget
                    placerat. Pellentesque mattis elit sit amet elit ullamcorper
                    gravida.
                </p>
                <p>
                    Integer erat tellus, suscipit sit amet sem sed, blandit
                    semper diam. Mauris quam mauris, malesuada posuere neque sit
                    amet, malesuada sollicitudin odio. Phasellus maximus neque
                    condimentum, vehicula elit nec, vestibulum neque. Fusce
                    vulputate blandit turpis, in dignissim sem semper ac. Mauris
                    nec nisi urna. Donec feugiat, mauris ut vehicula efficitur,
                    dolor velit commodo libero, eget luctus magna neque in arcu.
                    Quisque dignissim maximus fringilla.
                </p>
                <p>
                    Sed sit amet lorem mollis, condimentum eros tempus,
                    scelerisque nisl. Proin gravida a diam imperdiet sagittis.
                    Sed sit amet ligula sed orci elementum tincidunt. Mauris
                    porta orci nec tempor euismod. Curabitur fermentum justo mi,
                    quis dictum nunc suscipit accumsan. Aliquam id est non
                    lectus iaculis interdum et elementum lectus. Sed quis lacus
                    sed lectus euismod tristique non ut nisl. Donec risus
                    libero, porta nec magna sed, dignissim bibendum nibh. In
                    condimentum sagittis mollis. Duis at dui at felis egestas
                    pharetra et in justo. Morbi tristique ex eros, quis
                    fermentum nulla accumsan eu. In varius urna eget leo
                    tincidunt egestas sit amet a elit. Praesent sed tincidunt
                    lacus. Aenean rhoncus nibh vitae nulla condimentum, rhoncus
                    condimentum felis porta.
                </p>
                <p>
                    Etiam non malesuada magna. Morbi vulputate, lorem porttitor
                    interdum consequat, diam augue venenatis sapien, ut aliquet
                    urna ipsum nec ex. Ut accumsan lorem ultricies erat mollis
                    hendrerit. Integer vitae ligula risus. Nunc augue velit,
                    consequat ac leo a, pharetra eleifend justo. Suspendisse
                    potenti. Maecenas lacus dolor, pellentesque accumsan
                    porttitor id, eleifend vitae ante. Proin auctor rhoncus
                    risus, vitae molestie nisi consequat in. Nunc sed orci eros.
                    Sed ut pharetra sapien, vitae ultricies odio. Nam laoreet
                    dignissim metus, et luctus ante. Morbi venenatis magna quis
                    consequat convallis.{" "}
                </p>
            </div>
        </div>
    );
}

export default App;
