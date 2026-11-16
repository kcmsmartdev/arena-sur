import FeatureAccordion from "./FectureAcordeon";

export default function Responsabilidad(){
    return(
        <section className="w-full max-w-7xl mx-auto px-3 py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <div>
                    <span className="w-fit px-4 py-2 rounded-4xl font-heading uppercase tracking-widest text-black text-xs font-bold bg-sand">
                            COMPROMISO
                        </span>
                    <h2 className=" font-heading font-bold text-3xl lg:text-5xl mt-4">
                        La confianza es el valor que acompaña cada operación.
                    </h2>
                </div>

               <FeatureAccordion />
            </div>
        </section>
    )
}