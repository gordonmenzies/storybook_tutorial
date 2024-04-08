import "./ProfileCard.scss";

type ProfileCardProps = {
  name: string;
  image: string;
  email: string;
  phoneNumber: string;
  styleVariation: string;
};

const ProfileCard = ({
  styleVariation,
  name,
  image,
  email,
  phoneNumber,
}: ProfileCardProps) => {
  return (
    <div className={styleVariation}>
      <img className="profile-card__image" src={image} alt={name} />
      <div className="profile-card__content">
        <h2 className="profile-card__heading">{name}</h2>
        <a href={"mailto:" + email}>{email}</a>
        <a href={"tel:" + phoneNumber}>{phoneNumber}</a>
      </div>
    </div>
  );
};

export default ProfileCard;
