import {Modal} from 'antd';

const confirmation = ({isShowModal, setIsShowModal, indexOfRecord, data}) => {

    const handleOk = () => {
        setIsShowModal(false);
        
    }

    const handleCancel = () => {
        setIsShowModal(false);
    }

    return (
        <Modal
            title="Confirm Delete"
            visible={isShowModal}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <h1>Are you sure about that ?</h1>
        </Modal>
    )
}

export default confirmation;