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

            <section id="userInfo" className="permitDetailsSection">
                <div className="container userInfo">
                    <h2>Applicant Information</h2>
                    <div class="form-group row">
                        <label htmlFor="userName" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Name of applicant</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="text" id="userName" value={permitDetail?.applicantName || '-'} />
                        </div>

                        <label htmlFor="address" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Address</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="text" id="address" value={permitDetail?.applicantContactDetails?.address || '-'} />
                        </div>

                        <label htmlFor="mail" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> email address</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="email" id="mail" value={permitDetail?.applicantContactDetails?.email || '-'} />
                        </div>

                        <label htmlFor="phone" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Phone number</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="number" id="phone" value={permitDetail?.applicantContactDetails?.phone || '-'} />
                        </div>

                        <label htmlFor="contractor" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Contractor Name</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="text" id="contractor" value={permitDetail?.contractorContactDetails?.name || '-'} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="horizantal-line" />

            <section id="propertyInfo" className="permitDetailsSection">
                <div className="container">
                    <h2>Property Information</h2>
                    <div class="form-group row">
                        <label htmlFor="propertyAddress" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Property Address</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="text" id="propertyAddress" value={permitDetail?.propertyInfo?.propertyAddress || '-'} />
                        </div>

                        <label htmlFor="lot" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Parcel or lot number</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="number" id="lot" value={permitDetail?.propertyInfo?.lot || '-'} />
                        </div>

                        <label htmlFor="legalDescription" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Legal Description</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="text" id="legalDescription" value={permitDetail?.propertyInfo?.legalDesc || '-'} />
                        </div>

                        <label htmlFor="propertyOwner" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Property Owner</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="text" id="propertyOwnerphone" value={permitDetail?.propertyInfo?.propertyOwner || '-'} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="horizantal-line" />

            <section id="projectDesc" className="permitDetailsSection">
                <div className="container">
                    <h2>Property Description</h2>
                    <div class="form-group row">
                        <label htmlFor="constructionType" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Construction Type</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="text" id="constructionType" value={permitDetail?.propertyDesc?.type || '-'} />
                        </div>

                        <label htmlFor="scope" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Scope of work</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="text" id="scope" value={permitDetail?.propertyDesc?.scope || '-'} />
                        </div>

                        <label htmlFor="cost" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Project cost</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="number" id="cost" value={permitDetail?.propertyDesc?.estimation || '-'} />
                        </div>

                        <label htmlFor="startDate" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Estimated start Date</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="date" id="startDate" value={permitDetail?.propertyDesc?.projectStartDate || '-'} />
                        </div>

                        <label htmlFor="endDate" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Estimated end Date</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="date" id="endDate" value={permitDetail?.propertyDesc?.projectEndDate || '-'} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="horizantal-line" />

            <section id="types" className="permitDetailsSection">
                <div className="container">
                    <h2>Permit Type</h2>
                    <div class="form-group row">
                        <label htmlFor="permitType" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Type of permit</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="text" id="permitType" value={permitDetail?.permit?.type || '-'} />
                        </div>

                        <label htmlFor="applicationNumber" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Application Number</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="number" id="applicationNumber" value={permitDetail?.permit?.application || '-'} />
                        </div>

                        <label htmlFor="fee" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Permit fees</label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="number" id="fee" value={permitDetail?.permit?.fees || '-'} />
                        </div>

                        <label htmlFor="paymentMethod" className="col-sm-2 col-md-4 col-lg-2 col-form-label"> Payment Method </label>
                        <div class="col-sm-10 col-md-8 col-lg-10">
                            <input readOnly type="text" id="paymentMethod" value={permitDetail?.permit?.method || '-'} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="horizantal-line" />

            <section id="docs">
                <div className="container">
                    <h2>Design Document</h2>
                    <p> please upload the design document here</p>
                    <input type="file" />
                </div>
            </section>
        </main>
    )
}

export default PermitDetails;