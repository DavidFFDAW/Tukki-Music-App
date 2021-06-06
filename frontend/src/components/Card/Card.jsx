import React from 'react';
import './card.css';

export default function Card({ img, title, content, width } = { width: 300 }) {
    
    return (
        <>
            <div className="card">
                <div className="flex flex-center" style={{ width: width }}>
                    <div>
                        <div className="flex flex-center">
                            <div className="card-img"></div>
                        </div>
                        <div className="card-title">
                            <span>{ title }</span>
                        </div>
                        <div className="card-content">
                            <p>{ content }</p>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    );
}