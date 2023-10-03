import React, {useEffect} from 'react';
import KUTE from 'kute.js';
import './LavaLamp.css'


const LavaLamp: React.FC = () => {


    useEffect(() => {

        const blobs = document.querySelectorAll('#blobs div');

        blobs.forEach(blob => {
            const blobElement = blob as HTMLElement; // Cast to HTMLElement
            let delay: number = Math.random() * 7
            let duration: number = Math.random() * 8 + 15;
            blobElement.style.animationDelay = delay + 's';
            blobElement.style.animationDuration = duration + 's';

            blobElement.addEventListener('animationiteration', event => {
                const animationDelay = parseFloat(getComputedStyle(blobElement).animationDelay) || 0;
                const animationDuration = parseFloat(getComputedStyle(blobElement).animationDuration) || 0;
                //console.log(event.animationName)
                if (event.animationName === 'floating-blobs') {
                    blobElement.style.left = Math.random() * 100 + '%';
                    blobElement.style.transform = 'scale(' + (Math.random() * 1.5 + 0.2) + ')';
                }
            });

        });

        // Load the KUTE library dynamically
        const morphScript = document.createElement('script');
        morphScript.src = 'https://cdn.jsdelivr.net/npm/kute.js@2.1.0/dist/kute.min.js';
        morphScript.async = true;
        morphScript.onload = () => {
            console.log('HOW MANY BLOBS  : ' + blobs.length)

            for (let i = 1; i <= (blobs.length * 2); ++i) {
                let animationDuration = Math.random() * 2000 + 1500;
                KUTE.fromTo(
                    '#blob' + i,
                    {path: '#blob' + i},
                    {path: '#blob' + ++i},
                    {repeat: 999, duration: animationDuration, yoyo: true}
                ).start();
            }
        };

        // Add the script to the document
        document.body.appendChild(morphScript);


        // Cleanup the script element when the component unmounts
        return () => {
            document.body.removeChild(morphScript);
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
                    version="1.1">

                    <defs>
                        <linearGradient id="bg-gradient-1" x1="0%" y1="20%" x2="100%" y2="%">
                            <stop offset="0%" style={{stopColor: '#333', stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: '#0005', stopOpacity: 1}}/>
                        </linearGradient>
                    </defs>

                    <g transform="translate(450.7256843113689 283.4942824330989)">
                        <path
                            id="blob1"
                            d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                        />
                    </g>

                    <g transform="translate(509.54377535978017 281.49390864595887)"
                       style={{visibility: 'hidden'}}>
                        <path
                            id="blob2"
                            d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                        />
                    </g>
                </svg>

            </div>

            <div className="morphing-blob-2">

                <svg
                    id="visual"
                    viewBox="0 0 900 600"
                    width="900"
                    height="600"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1">
                    <defs>
                        <linearGradient id="bg-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#333', stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: '#0005', stopOpacity: 1}}/>
                        </linearGradient>
                    </defs>

                    <g transform="translate(404.0290456560082 271.22495511123003)">
                        <path
                            id="blob3"
                            d="M158.3 -156.2C202.6 -151.5 234.3 -99.2 244.6 -42.8C254.9 13.6 243.9 74 216.7 128.8C189.5 183.6 146.1 232.8 101.9 225.1C57.7 217.4 12.8 152.9 -28.1 119.6C-69.1 86.4 -106 84.4 -121.5 66C-137 47.6 -131 12.8 -138.9 -38.7C-146.8 -90.3 -168.5 -158.5 -147.7 -167.3C-126.8 -176.2 -63.4 -125.6 -3.2 -121.8C57 -117.9 114 -160.8 158.3 -156.2"
                        />
                    </g>
                    <g
                        transform="translate(467.2302338761692 353.5452170833339)"
                        style={{visibility: 'hidden'}}
                    >
                        <path
                            id="blob4"
                            d="M121.9 -165.5C151.3 -120.7 163.8 -75.9 167.9 -32.5C172.1 10.8 167.9 52.6 145.7 77.7C123.6 102.8 83.5 111.1 47.1 120.5C10.6 130 -22.2 140.6 -44.2 129.3C-66.2 117.9 -77.2 84.4 -113.2 51.3C-149.2 18.1 -210 -14.8 -203.3 -32.9C-196.6 -51 -122.4 -54.2 -77.3 -96.3C-32.1 -138.3 -16.1 -219.2 15.1 -237.2C46.3 -255.2 92.6 -210.3 121.9 -165.5"
                        />
                    </g>
                </svg>


            </div>

            <div className="morphing-blob-3">

                <svg id="visual"
                     viewBox="0 0 900 600"
                     width="900"
                     height="600"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     version="1.1">

                    <defs>
                        <linearGradient id="bg-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#FA7268', stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: '#BB004B', stopOpacity: 1}}/>
                        </linearGradient>
                        <linearGradient id="bg-gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#BB004B', stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: '#FA7268', stopOpacity: 1}}/>
                        </linearGradient>
                    </defs>

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

            <div className="morphing-blob-4">
                <svg id="visual"
                     viewBox="0 0 900 600"
                     width="900"
                     height="600"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     version="1.1">

                    <defs>
                        <linearGradient id="bg-gradient-5" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#FA7268', stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: '#BB004B', stopOpacity: 1}}/>
                        </linearGradient>
                        <linearGradient id="bg-gradient-6" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#BB004B', stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: '#FA7268', stopOpacity: 1}}/>
                        </linearGradient>
                    </defs>

                    <g transform="translate(455.29444455961647 356.40760265008265)">

                        <path id="blob7"
                              d="M173.7 -156.8C204.6 -99.8 194.9 -28.8 170.4 23C145.9 74.7 106.6 107.2 64.9 122.7C23.1 138.2 -21 136.7 -75.1 123.2C-129.2 109.7 -193.3 84.2 -202.5 45.7C-211.7 7.2 -166.1 -44.4 -123.2 -104.2C-80.3 -164 -40.1 -232 15.6 -244.5C71.4 -256.9 142.8 -213.9 173.7 -156.8"
                              fill="#BB004B">
                        </path>
                    </g>
                    <g transform="translate(410.90039939185255 307.0726734792533)"
                       style={{visibility: 'hidden'}}>
                        <path id="blob8"
                              d="M185.5 -145.9C231.3 -90.5 253.1 -13.9 231 40.6C208.9 95 142.8 127.2 75.3 161.8C7.8 196.4 -61.2 233.4 -98.4 212.3C-135.5 191.3 -140.9 112.4 -149.9 42.8C-159 -26.8 -171.8 -87 -147.4 -137.5C-123 -188.1 -61.5 -229 4.2 -232.4C69.8 -235.7 139.7 -201.4 185.5 -145.9"
                              fill="#BB004B">
                        </path>
                    </g>
                </svg>
            </div>

            <div className="morphing-blob-5">

                <svg viewBox="0 0 900 600"
                     width="900"
                     height="600"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     version="1.1">

                    <defs>
                        <linearGradient id="bg-gradient-7" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#FA7268', stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: '#BB004B', stopOpacity: 1}}/>
                        </linearGradient>
                        <linearGradient id="bg-gradient-8" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#BB004B', stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: '#FA7268', stopOpacity: 1}}/>
                        </linearGradient>
                    </defs>

                    <g transform="translate(452.1409863151091 311.25024819625366)">
                        <path id="blob9"
                              d="M135.3 -231.8C173.3 -212.4 200.5 -172 219.8 -129.8C239.2 -87.7 250.6 -43.8 251.6 0.6C252.6 45 243.2 90 219.5 124.5C195.7 159 157.6 183 118.6 191.3C79.7 199.7 39.8 192.3 -5.1 201.1C-50 209.9 -100 234.9 -132.8 223C-165.5 211 -181.1 162.3 -205.9 119C-230.7 75.7 -264.9 37.8 -253.8 6.4C-242.6 -25 -186.3 -50 -159.4 -89.8C-132.6 -129.7 -135.3 -184.4 -113.7 -213.2C-92 -242 -46 -245 1.3 -247.3C48.7 -249.6 97.3 -251.3 135.3 -231.8"
                              fill="#BB004B"></path>
                    </g>
                    <g transform="translate(439.0843719833481 328.5726349141429)"
                       style={{visibility: 'hidden'}}>
                        <path id="blob10"
                              d="M189.7 -163.4C223 -109.5 211.4 -31.9 191 38C170.6 107.9 141.2 170.2 97.1 185.1C52.9 200 -6.1 167.6 -52.4 135.1C-98.6 102.7 -132.2 70.3 -158.2 18.3C-184.2 -33.6 -202.8 -105 -175.1 -157.7C-147.5 -210.3 -73.8 -244.1 2.2 -245.9C78.2 -247.7 156.4 -217.4 189.7 -163.4"
                              fill="#BB004B"></path>
                    </g>
                </svg>
            </div>


        </div>
    );
};

export default LavaLamp;
