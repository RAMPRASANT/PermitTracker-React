import React from "react";
import permitData from '../data.json';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    //function to navigate when user click the permit detail card
    const handleCardClick = (id) => {
        navigate(`/permitDetails?permitId=${id}`)
    }

    //function to navigate when user select the permit detail card using keyboard event
    const handleKeyPress = (e, id) => {
        if (e.key === 'Enter') {
            handleCardClick(id)
        }
    }

    return (
        <main className="container mainContainer">
            {permitData.map((permitItem) => {
                return (
                    <div className={`card clickable card-${permitItem.id}`} key={permitItem.id}
                        onClick={() => handleCardClick(permitItem.id)}
                        onKeyDown={(e) => handleKeyPress(e, permitItem.id)} role="listitem" aria-roledescription="permit entries" tabIndex={0}>
                        <h2>Name: {permitItem.applicantName}</h2>
                        <p>phone: {permitItem?.applicantContactDetails?.phone || '-'}</p>
                        <p>email: {permitItem?.applicantContactDetails?.email || '-'}</p>
                        <p>address: {permitItem?.applicantContactDetails?.address || '-'}</p>
                        <p>contractor: {permitItem?.contractorContactDetails?.name || '-'}</p>
                        <p>property type: {permitItem?.propertyDesc?.type}</p>
                        <p>property estimation: {permitItem?.propertyDesc?.estimation}</p>
                    </div>
                )
            })}
        </main>
    )
}

export default Dashboard