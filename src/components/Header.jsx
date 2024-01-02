export default function Header(){
    //handleDownload will have to direct to ios or android app store
    function handleIOSDownload(){
        alert("You clicked on the button");
    }
    
    function handleAndroidDownload(){
        alert("You clicked on the button");
    }

    return (
        <header>
            <h1>Unseen</h1>
            <ul>
                {/* hrefs will need to be updated once we have pages for these buttons */}
                <li><a href="#home" >Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact"></a>Contact Us</li>
                <li><button onClick={handleIOSDownload}>Download in the App Store</button></li>
                <li><button onClick={handleAndroidDownload}>Download in the play Store</button></li>
            </ul>
        </header>
    )
}