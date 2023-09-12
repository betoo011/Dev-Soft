import { useState, useId, useEffect } from "react"

export function Filters({ onChange }) {

    const [isGrabbing, setIsGrabbing] = useState(false); // Estado para controlar el estilo del cursor
    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterdId = useId();

    const handleChangeMinPrice = (e) => {


        setMinPrice(e.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    useEffect(() => {
        const price = document.getElementById(minPriceFilterdId);

        const handleMouseDown = () => {
            setIsGrabbing(true);
        };

        const handleMouseUp = () => {
            setIsGrabbing(false);
        };

        if (price) {
            price.addEventListener("mousedown", handleMouseDown);
            document.addEventListener("mouseup", handleMouseUp);

            return () => {
                price.removeEventListener("mousedown", handleMouseDown);
                document.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [minPriceFilterdId]);

    return (

        <>
            <section>
                <div className="flex gap-4 mx-8 items-center mt-[1rem]">
                    <div className="flex gap-4">
                        <label className="pointer-events-none" htmlFor={minPriceFilterdId}>Precio minimo</label>
                        <input
                            className={`${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
                            type="range"
                            id={minPriceFilterdId}
                            min='0'
                            max='3000'
                            onChange={handleChangeMinPrice}

                        />
                        <span>{minPrice}</span>
                    </div>
                </div>
            </section>
        </>
    )
}