
import { Title, Container } from "./styles";
import { getImages } from '../../utils/getImag';


function Credits({ credits }) {

    return (
        <>
            <Title>Créditos</Title>
            {credits && (
                <Container>
                    {credits.slice(0, 6).map(artist => (
                        <div key={artist.id}>
                            <img src={getImages(artist.profile_path)}/>
                            <p>{artist.original_name}</p>
                        </div>
                    ))}
                </Container>
            )}
        </>
    );
}
export default Credits;

