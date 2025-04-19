import React, { useRef, useState, useEffect } from 'react';

const Camera = ({ locationAllowed }) => {
    const [stream, setStream] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (locationAllowed) {
            openCamera();
        }
    }, [locationAllowed]);

    const openCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
                videoRef.current.play();
                setStream(mediaStream);
            }
        } catch (err) {
            console.error("Camera access error:", err);
            alert("Could not access the camera.");
        }
    };

    const captureImage = () => {
        if (!videoRef.current || !canvasRef.current) return;
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/png');
        console.log("Captured image:", imageData);

        // Optionally send to backend here

        // Stop camera
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
    };

    return (
        locationAllowed && (
            <div>
                <h5>Camera Preview</h5>
                <video ref={videoRef} style={{ width: "100%", maxWidth: "400px" }} autoPlay />
                <canvas ref={canvasRef} style={{ display: "none" }} />
                <button className="btn btn-primary mt-2" onClick={captureImage}>Capture Image</button>
            </div>
        )
    );
};

export default Camera;
