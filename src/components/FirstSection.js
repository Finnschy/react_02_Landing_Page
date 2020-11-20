const FirstSection = () => {
    return ( 
        <section id="firstSection">
            <h4>What We Do</h4>
            <h1>We've got everything you need to launch and grow your business</h1>
            
                <img className="icons brush" src="assets/img/brush.svg" alt=""/>
                <img className="icons object" src="assets/img/object-select.svg" alt=""/>
            <article className="firstSectionFlex firstRow">

                <div className="firstSectionFlexItem brand">
                    <h5>Brand Identity</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque beatae sint debitis soluta eius perferendis minima sapiente? Debitis, nostrum eligendi ex numquam consequuntur, quis, exercitationem cum ipsum?</p>
                </div>

                <div className="firstSectionFlexItem illu">
                    <h5>Illustration</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque beatae sint debitis soluta eius perferendis minima sapiente? Debitis, nostrum eligendi ex numquam consequuntur, quis, exercitationem cum ipsum?</p>
                </div>

            </article>
                <img className="icons megaphone" src="assets/img/megaphone.svg" alt=""/>
                <img className="icons globe" src="assets/img/globe-line.svg" alt=""/>


            <article className="firstSectionFlex">

                <div className="firstSectionFlexItem marketing">
                    <h5>Marketing</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque beatae sint debitis soluta eius perferendis minima sapiente? Debitis, nostrum eligendi ex numquam consequuntur, quis, exercitationem cum ipsum?</p>
                </div>

                <div className="firstSectionFlexItem webdesign">
                    <h5>Web Design</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque beatae sint debitis soluta eius perferendis minima sapiente? Debitis, nostrum eligendi ex numquam consequuntur, quis, exercitationem cum ipsum?</p>
                </div>

            </article>

        </section>
        
     );
}
 
export default FirstSection;