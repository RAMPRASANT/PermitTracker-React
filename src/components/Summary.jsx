import React from 'react';
import permitData from '../data.json';

const Summary = () => {
    let totalPermits = permitData.length
    let pendingPermits = permitData.filter((permit) => permit.status === 'pending').length

    return (
        <main className="container">
            <section id="summary">
                <div className="Container">
                    <div className="summaryContainer">
                        <span className="card" role='span' aria-roledescription='summary section' tabIndex={0}>
                            <p id="totalPermits"> Total permits Issued: {totalPermits}</p>
                            <p id="pendingPermits"> Pending permits: {pendingPermits} </p>
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default Summary;