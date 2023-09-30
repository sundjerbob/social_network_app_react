import React, {useEffect} from 'react';
import KUTE from 'kute.js';
import './LavaLamp.css'


const LavaLamp: React.FC = () => {

    useEffect(() => {

        // Load the KUTE library dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/kute.js@2.1.0/dist/kute.min.js';
        script.async = true;
        script.onload = () => {

            for (let i = 1; i <= 6; i += 2) {
                let animationDuration = Math.random() * 3000 + 500;
                console.log(animationDuration);
                KUTE.fromTo(
                    '#blob' + i,
                    {path: '#blob' + i},
                    {path: '#blob' + (i + 1)},
                    {repeat: 999, duration: animationDuration, yoyo: true}
                ).start();
            }
        };

        // Add the script to the document
        document.body.appendChild(script);


        const blobs = document.querySelectorAll('#blobs div');

        blobs.forEach(blob => {
            const blobElement = blob as HTMLElement; // Cast to HTMLElement
            blobElement.addEventListener('animationiteration', event => {
                blobElement.style.left = Math.round(Math.random() * 100) + '%';
                blobElement.style.transform = 'scale(' + Math.random() * 0.6 + 0.4 + ')';

            });
            let scale = Math.random();
        });

        // Cleanup the script element when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="blobs">

            <div className="morphing-blob-1">

                <svg
                    className="blob-motion"
                    id="visual"
                    viewBox="0 0 960 540"
                    width="960"
                    height="540"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                >
                    <g transform="translate(450.7256843113689 283.4942824330989)">
                        <path
                            id="blob1"
                            d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                            fill="#F66B68"
                        />
                    </g>

                    <g transform="translate(509.54377535978017 281.49390864595887)"
                       style={{visibility: 'hidden'}}>
                        <path
                            id="blob2"
                            d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                            fill="#F66B68"
                        />
                    </g>
                </svg>

            </div>

            <div className="morphing-blob-2">

                <svg id="visual"
                     viewBox="0 0 900 600"
                     width="900" height="600"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     version="1.1">

                    <g transform="translate(404.0290456560082 271.22495511123003)">
                        <path
                            id="blob3"
                            d="M158.3 -156.2C202.6 -151.5 234.3 -99.2 244.6 -42.8C254.9 13.6 243.9 74 216.7 128.8C189.5 183.6 146.1 232.8 101.9 225.1C57.7 217.4 12.8 152.9 -28.1 119.6C-69.1 86.4 -106 84.4 -121.5 66C-137 47.6 -131 12.8 -138.9 -38.7C-146.8 -90.3 -168.5 -158.5 -147.7 -167.3C-126.8 -176.2 -63.4 -125.6 -3.2 -121.8C57 -117.9 114 -160.8 158.3 -156.2"
                            fill="#F66B68"
                        />
                    </g>
                    <g transform="translate(467.2302338761692 353.5452170833339)"
                       style={{visibility: 'hidden'}}>
                        <path
                            id="blob4"
                            d="M121.9 -165.5C151.3 -120.7 163.8 -75.9 167.9 -32.5C172.1 10.8 167.9 52.6 145.7 77.7C123.6 102.8 83.5 111.1 47.1 120.5C10.6 130 -22.2 140.6 -44.2 129.3C-66.2 117.9 -77.2 84.4 -113.2 51.3C-149.2 18.1 -210 -14.8 -203.3 -32.9C-196.6 -51 -122.4 -54.2 -77.3 -96.3C-32.1 -138.3 -16.1 -219.2 15.1 -237.2C46.3 -255.2 92.6 -210.3 121.9 -165.5"
                            fill="#F66B68"
                        />
                    </g>
                </svg>

            </div>

            <div className="morphing-blob-2">
                <svg id="visual"
                     viewBox="0 0 900 600"
                     width="900"
                     height="600"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     version="1.1">
                    <g transform="translate(389.41463576994175 317.09740250868055)">
                        <path id="blob5"
                              d="M122.6 -220.3C151.9 -172 163.7 -126.1 186.1 -83.2C208.4 -40.3 241.3 -0.4 259.3 53.8C277.3 108.1 280.3 176.9 249.8 221.9C219.3 267 155.1 288.5 98.8 278.6C42.4 268.7 -6.1 227.4 -43.1 194.6C-80 161.9 -105.4 137.6 -119.5 109.9C-133.6 82.2 -136.4 51.1 -141.4 20C-146.5 -11.2 -153.7 -42.3 -151.1 -77.7C-148.4 -113 -135.8 -152.4 -109 -201.8C-82.2 -251.2 -41.1 -310.6 2.8 -314.9C46.7 -319.3 93.4 -268.6 122.6 -220.3"
                              fill="#BB004B"></path>
                    </g>
                    <g transform="translate(401.0938827448543 334.6433052922279)"
                       style={{visibility: 'hidden'}}>
                        <path id="blob6"
                              d="M185.8 -257.1C236.4 -256.6 270.1 -197.7 296.1 -136.5C322 -75.3 340.1 -11.9 326.9 43.6C313.7 99.2 269.1 146.8 216.3 161.8C163.4 176.7 102.4 158.9 54.7 161.5C7 164.1 -27.3 187.1 -62.2 187.8C-97.1 188.5 -132.4 167 -168 138.5C-203.6 110.1 -239.4 74.8 -232.7 40.9C-226.1 6.9 -177 -25.8 -159.7 -76.8C-142.4 -127.8 -156.9 -197.3 -135.6 -211.2C-114.3 -225.1 -57.1 -183.6 5.2 -191.7C67.6 -199.8 135.2 -257.6 185.8 -257.1"
                              fill="#BB004B"></path>
                    </g>
                </svg>
            </div>

        </div>
    );
};

export default LavaLamp;
