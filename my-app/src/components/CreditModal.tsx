import React from "react";
import './CreditModal.css';
import { TagGroup } from './Tag';

interface CreditModalProps {
    toggleModal: (show: boolean) => void;
    title: string;
    bgColor: string;
    contentColor: string;
    content: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
    tags?: { text: string }[];
}

function CreditModal({ toggleModal, title, bgColor, contentColor, content, onClick, style, className, tags }: CreditModalProps) {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            toggleModal(false);
        }
    };

    return (
        <div className={`credit-modal-container ${bgColor}`} onClick={handleOverlayClick}>
            <span className="helper"></span>
            <div className="modal">
                <div className={contentColor}>
                    <div className={`modal-content ${className || ''}`} style={style}>
                        <div className="modal-header">
                            <div className="close-btn" onClick={() => toggleModal(false)}>&times;</div>
                            <div className="modal-title" onClick={onClick}>{title}</div>
                        </div>
                        {tags && <TagGroup tags={tags} bordered={true} className="modal-tags" />}
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreditModal;