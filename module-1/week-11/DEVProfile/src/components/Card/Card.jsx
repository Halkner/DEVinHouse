import { useProfiles } from "../../hooks/useProfiles"
import PropTypes from 'prop-types';
import { CardStyle } from "./styles";

export const Card = ({ profile }) => {

    const {toggleFollowBtn} = useProfiles();

    return(
        <CardStyle>
            <p>{profile.iniciaisNome}</p>
            <p>{profile.nome}</p>
            <p>{profile.descricao}</p>
            <button onClick={() => toggleFollowBtn(profile.id)}>
                {profile.seguindo ? "Unfollow" : "Follow"}
            </button>
        </CardStyle>
    )
}

Card.propTypes = {
    profile: PropTypes.object
}