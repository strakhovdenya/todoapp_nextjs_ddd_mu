
import {Button} from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';


interface testProps {
    message: string
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: 'red'
        }
    })
)

const Sup = ({message}: testProps) => {
    const classes = useStyles();

    return (
        <>
            <Button className={classes.root} variant="contained">
                {message}
            </Button>
        </>
    );
}




export const getServerSideProps = async () => {
    return {
        props: {
            message:'!!!!!!!',
        },
    }
}


export default Sup;