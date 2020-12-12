import React, { useState } from 'react';

import { Card, Upload } from 'antd';

import './style.scss';

const ImageUpload = ({onChange}) => {


    const [previewImageUrl, setPreviewImageUrl] = useState(null)


    const onChangeImage = async (e) => {
        let image = e.target.files[0]
        let reader = new FileReader();
        await reader.readAsDataURL(image);
        reader.onloadend = () => {
            setPreviewImageUrl({ url: reader.result });
            onChange(image);
        };

    }
    return (
        <Card title="Tải lên ảnh bìa" bordered={false} style={{ width: 300 }}>
            {
                <div className="image-preview">
                    <img className="img-preview"
                     src={ previewImageUrl 
                        ? previewImageUrl.url
                        : "https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image-620x600.jpg"} alt=""/>
                </div> 
            }
            <input type="file" onChange={onChangeImage} />
        </Card>);
}

export default ImageUpload;