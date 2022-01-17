import React from "react";
import "./style.css";
const CardComponent = (props) => {
  const {
    data,
    votes,
    winner,
    myKey,
    currentKey,
    vote,
    setVote,
    onVote,
    wasVoted,
    voteAgain,
    cardType,
  } = props;

  const maxByExplorer = !!(typeof InstallTrigger !== 'undefined') ? 14 : 16;
  const actions = (
    <>
      <div className="card-category">
        {wasVoted ? "Thank you for your vote!" : data.category}
      </div>
      <div
        className={`card-actions ${cardType === "list" && "card-list-actions"}`}
      >
        {!wasVoted ? (
          <>
            <img
              src="assets/img/thumbs-color-up.svg"
              alt="thumbs up"
              className={`thumbs-btn ${
                vote === "positive" && myKey === currentKey && "thumbs-active"
              }`}
              onClick={() => setVote("positive", myKey)}
            />
            <img
              src="assets/img/thumbs-color-down.svg"
              alt="thumbs down"
              className={`thumbs-btn ${
                vote === "negative" && myKey === currentKey && "thumbs-active"
              }`}
              onClick={() => setVote("negative", myKey)}
            />
            <button
              className="vote-btn"
              disabled={myKey !== currentKey}
              onClick={() => onVote()}
            >
              Vote now
            </button>
          </>
        ) : (
          <button
            className="vote-btn"
            disabled={myKey !== currentKey}
            onClick={() => voteAgain()}
          >
            Vote again
          </button>
        )}
      </div>
    </>
  );

  return (
    <div
      className={cardType === "grid" ? "card-content" : "card-list-content"}
      style={{ backgroundImage: `url('/assets/img/people/${data.picture}')` }}
    >
      <div className={cardType === "grid" ? "card-data" : "card-list-data"}>
        <div
          className={
            cardType === "grid" ? "card-data-borders" : "winner-list-border"
          }
        >
          {winner === "positive" ? (
            <img src="assets/img/thumbs-color-up.svg" alt="thumbs up" />
          ) : (
            <img src="assets/img/thumbs-color-down.svg" alt="thumbs down" />
          )}
        </div>
        <div
          className={`card-info ${
            data.name.length >= maxByExplorer && cardType === "grid"
              ? "card-name-large"
              : "card-name-short"
          }`}
        >
          <div className={`card-name`}>{data.name}</div>
          <div className="card-description">{data.description}</div>
          {cardType === "grid" && actions}
        </div>
        <div
          className={
            cardType === "grid" ? "card-data-borders" : "actions-list-border"
          }
        >
          {cardType === "list" && actions}
        </div>
      </div>
      <div className="votes">
        <div className="positive" style={{ width: `${votes.positive}%` }} title={data.votes.positive}>
          <img
            src="assets/img/thumbs-up.svg"
            alt="thumbs up"
            style={{ paddingRight: "5px" }}
          />
          {votes.positive}%
        </div>
        <div className="negative" style={{ width: `${votes.negative}%` }} title={data.votes.negative}>
          {votes.negative}%
          <img
            src="assets/img/thumbs-down.svg"
            alt="thumbs down"
            style={{ paddingLeft: "5px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
