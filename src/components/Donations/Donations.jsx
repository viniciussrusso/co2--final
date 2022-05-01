import "./donation-widget.css";

const Donations = () => (
  <>
    <div
      className="fundraising-embeddable-widget"
      dataUrl="https://go.rallyup.com/campaigns/getcampaignstatus/a52f85"
      dataPermanenturl="a52f85"
      Style={{
        display: "none",
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(33, 150, 243)",
      }}
      dataInitialized="false"
    >
      <div
        className="fundraising-embeddable-widget-headline"
        style={{ color: "rgb(51, 120, 27)" }}
      >
        <h1>Donations</h1>
      </div>
      <div
        className="fundraising-embeddable-widget-body"
        style={{ color: "rgb(142, 142, 142)" }}
      >
        <p>
          Your donation is important. As this is a non-profitable application.
        </p>
      </div>
      <div className="fundraising-embeddable-widget-more-info">
        <a
          href="https://go.rallyup.com/a52f85"
          style={{ color: "rgb(51, 120, 27)" }}
        >
          More Info
        </a>
      </div>

      <div className="fundraising-embeddable-widget-contribute-button-container">
        <a
          className="fundraising-embeddable-widget-contribute-button"
          href="https://go.rallyup.com/a52f85?OpenDonateModal=true"
          style={{
            textDecoration: "none",
            backgroundColor: "rgb(139, 195, 74)",
            borderColor: "rgb(125, 176, 67)",
          }}
        >
          Donate
        </a>
      </div>
    </div>
  </>
);

export default Donations;
