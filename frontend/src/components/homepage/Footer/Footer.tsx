interface FooterProps{
    className?: string,
}

export default function Footer({className = ""}){
    return (
        <>
        <footer className={` ${className}`}>

        </footer>
        </>

    );
}