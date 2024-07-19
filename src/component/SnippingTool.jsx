    import React, { useRef, useState } from 'react';
    import Cropper from 'react-cropper';
    import 'cropperjs/dist/cropper.css';

    const SnippingTool = () => {
        const [image, setImage] = useState(null);
        const [croppedImage, setCroppedImage] = useState(null);
        const cropperRef = useRef(null);

        const captureWindowContent = async (e) => {
            if (e.target.files && e.target.files.length > 0) {
                const reader = new FileReader();
                reader.addEventListener('load', () => setImage(reader.result));
                reader.readAsDataURL(e.target.files[0]);
            }
        };

        const onCrop = () => {
            const cropper = cropperRef.current.cropper;
            // Get the canvas with the cropped image
            const canvas = cropper.getCroppedCanvas({
                fillColor: '#fff', // Background color to fill the empty area
                // Adjust the width and height to match the cropped image's size
                width: cropper.getCroppedCanvas().width,
                height: cropper.getCroppedCanvas().height,
            });
            setCroppedImage(canvas.toDataURL());
        };

        const [imageList, setImageList] = useState([]);

        const imageCroppedEvent = () => {
            setImageList([...imageList, { type: "click", image: croppedImage }]);
            setCroppedImage(null);
            setImage(null);
        };

        return (
            <div>
                <input type="file" accept="image/*" onChange={captureWindowContent} />
                {image && (
                    <Cropper
                        src={image}
                        style={{ height: 300, width: '50%' }}
                        viewMode={1}
                        guides={false}
                        crop={onCrop}
                        ref={cropperRef}
                        background={false}
                        responsive={true}
                        zoomable={false}
                        ready={() => {
                            if (cropperRef.current) {
                                const cropper = cropperRef.current.cropper;
                                cropper.setCropBoxData({ width: 0, height: 0 });
                                cropper.setData({});
                            }
                        }}
                    />
                )}

                {croppedImage && (
                    <div>
                        <h3>Cropped Image:</h3>
                        <img src={croppedImage} alt="cropped" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                )}

                <button onClick={imageCroppedEvent}>Capture</button>

                <div>
                    {imageList.map((item, index) => (
                        <div key={index} className='grid'>
                            <div>{item.type}</div>
                            <img src={item.image} alt='' style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default SnippingTool;
