import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 1200,
        },
        rateNumber: {
            fontSize: 48,
            color: theme.palette.secondary.main
        }
    }),
);