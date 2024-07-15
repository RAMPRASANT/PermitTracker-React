import React, { useEffect, useState } from 'react';
import permitData from '../data.json';
import { useSearchParams } from 'react-router-dom';


const PermitDetails = () => {
    const [permitDetail, setPermitDetail] = useState({})
    const [searchParams, setSearchParams] = useSearchParams();
    const permitId = searchParams.get('permitId')

    //use effect to fetch the details of the selected permit
    useEffect(() => {
        const filteredDetails = permitData?.filter((permit) => (
            permit.id === parseInt(permitId, 10)
        ))
        setPermitDetail(filteredDetails[0])

    }, [permitId]);

    return (
        <main className="container">
            <section id="intro">
                <div className="container-wrapper">
                    <div className="container">
                        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav permitNav">
                                        <a className="nav-link" aria-current="page" href="#userInfo">Applicant Info</a>
                                        <a className="nav-link" href="#propertyInfo">Property Info</a>
                                        <a className="nav-link" href="#projectDesc">Project Description</a>
                                        <a className="nav-link" href="#types">Permit Types</a>
                                        <a className="nav-link" href="#docs">Design Document</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            <br />
            <section id="userInfo">
                <div className="container userInfo">
                    <h1>Applicant Information</h1>
                    <label htmlFor="userName"> Name of applicant</label>
                    <input readOnly type="text" id="userName" value={permitDetail?.applicantName || '-'} />
                    <br />
                    <label htmlFor="address"> Address</label>
                    <input readOnly type="text" id="address" value={permitDetail?.applicantContactDetails?.address || '-'} />
                    <br />
                    <label htmlFor="mail"> email address</label>
                    <input readOnly type="email" id="mail" value={permitDetail?.applicantContactDetails?.email || '-'} />
                    <br />
                    <label htmlFor="phone"> Phone number</label>
                    <input readOnly type="number" id="phone" value={permitDetail?.applicantContactDetails?.phone || '-'} />
                    <br />
                    <label htmlFor="contractor"> Contractor Name</label>
                    <input readOnly type="text" id="contractor" value={permitDetail?.contractorContactDetails?.name || '-'} />
                </div>
            </section>
            <br />
            <div className="horizantal-line" />
            <br />
            <section id="propertyInfo">
                <div className="container">
                    <h1>Property Information</h1>
                    <label htmlFor="propertyAddress"> Property Address</label>
                    <input readOnly type="text" id="propertyAddress" value={permitDetail?.propertyInfo?.propertyAddress || '-'} />
                    <br />
                    <label htmlFor="lot"> Parcel or lot number</label>
                    <input readOnly type="number" id="lot" value={permitDetail?.propertyInfo?.lot || '-'} />
                    <br />
                    <label htmlFor="legalDescription"> Legal Description</label>
                    <input readOnly type="text" id="legalDescription" value={permitDetail?.propertyInfo?.legalDesc || '-'} />
                    <br />
                    <label htmlFor="propertyOwner"> Property Owner</label>
                    <input readOnly type="text" id="propertyOwnerphone" value={permitDetail?.propertyInfo?.propertyOwner || '-'} />
                </div>
            </section>
            <br />
            <div className="horizantal-line" />
            <br />
            <section id="projectDesc">
                <div className="container">
                    <h1>Property Description</h1>
                    <label htmlFor="constructionType"> Construction Type</label>
                    <input readOnly type="text" id="constructionType" value={permitDetail?.propertyDesc?.type || '-'} />
                    <br />
                    <label htmlFor="scope"> Scope of work</label>
                    <input readOnly type="text" id="scope" value={permitDetail?.propertyDesc?.scope || '-'} />
                    <br />
                    <label htmlFor="cost"> Project cost</label>
                    <input readOnly type="number" id="cost" value={permitDetail?.propertyDesc?.estimation || '-'} />
                    <br />
                    <label htmlFor="startDate"> Estimated start Date</label>
                    <input readOnly type="date" id="startDate" value={permitDetail?.propertyDesc?.projectStartDate || '-'} />
                    <br />
                    <label htmlFor="endDate"> Estimated end Date</label>
                    <input readOnly type="date" id="endDate" value={permitDetail?.propertyDesc?.projectEndDate || '-'} />
                </div>
            </section>
            <br />
            <div className="horizantal-line" />
            <br />
            <section id="types">
                <div className="container">
                    <h1>Permit Type</h1>
                    <label htmlFor="permitType"> Type of permit</label>
                    <input readOnly type="text" id="permitType" value={permitDetail?.permit?.type || '-'} />
                    <br />
                    <label htmlFor="applicationNumber"> Application Number</label>
                    <input readOnly type="number" id="applicationNumber" value={permitDetail?.permit?.application || '-'} />
                    <br />
                    <label htmlFor="fee"> Permit fees</label>
                    <input readOnly type="number" id="fee" value={permitDetail?.permit?.fees || '-'} />
                    <br />
                    <label htmlFor="paymentMethod"> Payment Method </label>
                    <input readOnly type="text" id="paymentMethod" value={permitDetail?.permit?.method || '-'} />
                </div>
            </section>
            <br />
            <div className="horizantal-line" />
            <br />
            <section id="docs">
                <div className="container">
                    <h1>Design Document</h1>
                    <p> please upload the design document here</p>
                    <input type="file" />
                </div>
            </section>
        </main>
    )
}

export default PermitDetails;