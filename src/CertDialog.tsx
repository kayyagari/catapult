import React from "react";
import {Modal} from "antd";

const CertDialog: React.FC<{cert: object, trustAndLaunch: any, abortLaunch: any}> = ({cert, trustAndLaunch, abortLaunch}) => {
    if(cert.der !== undefined) {
        return (<Modal title="Untrusted Certificate" open={true} onOk={trustAndLaunch} onCancel={abortLaunch}
        okText={"Yes"} cancelText={"No"}>
            <p><b>Subject:</b> {cert.subject}</p>
            <p><b>Issued By:</b> {cert.issuer}</p>
            <p><b>Expires On:</b> {cert.expires_on}</p>
            <p>Do you trust this certificate?</p>
        </Modal>)
    }
    return <></>
}

export default CertDialog;