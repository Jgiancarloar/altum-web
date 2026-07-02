export default function Hero() {
    return (
        <section className="px-5 py-10">
            <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto overflow-hidden">
                <div className="w-full bg-pink-200">
                    <h2 className="mb-2">
                        Ingenieria que eleva el estándar
                    </h2>
                    <h1 className="mb-5">
                        Soluciones integrales para proyectos que exigen confianza.
                    </h1>
                    <p className="mb-5">
                        Altum es una empresa de ingeniería que se especializa en la creación de soluciones innovadoras para proyectos de construcción y mantenimiento.
                    </p>
                    <div className="mb-5">
                        <button>
                            Solicita una evaluación
                        </button>
                        <button>
                            Ver nuestros servicios
                        </button>
                    </div>
                    <div className="gap-5 grid grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p>Seguridad certificada</p>
                        </div>
                        <div>
                            <p>Cumplimiento de normas</p>
                        </div>
                        <div>
                            <p>Ingenieria especializada</p>
                        </div>
                        <div>
                            <p>Calidad en cada detalle</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 w-full">
                    <div className="bg-green-200 h-40 md:h-[calc(100%+80px)] -translate-y-10 rotate-15 w-full">

                    </div>
                    <div className="bg-blue-200 h-40 md:h-[calc(100%+80px)] -translate-y-10 rotate-15 w-full">

                    </div>
                    <div className="bg-red-200 h-40 md:h-[calc(100%+80px)] -translate-y-10 rotate-15 w-full">

                    </div>
                </div>
            </div>
        </section>
    );
}