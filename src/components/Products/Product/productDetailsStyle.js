import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) =>({
    root: {
        maxWidth: '70%',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }));