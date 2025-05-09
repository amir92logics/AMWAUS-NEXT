// import { Box, Dialog, DialogContent, Stack } from '@mui/material';
// import { BagCross } from 'iconsax-react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// interface VideoPopupProps {
//   open: boolean;
//   handleClose: () => void;
// }

// const  VideoPopup: React.FC<VideoPopupProps> = ({ open, handleClose }) => {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.up('sm'));

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       maxWidth="md"
//       aria-labelledby="video-dialog-title"
//       sx={{ overflow: 'hidden' }}
//     >
//       <DialogContent>
//         {/* Close Button */}
//         <Box
//           onClick={handleClose}
//           sx={{
//             position: 'absolute',
//             right: { xl: '33px', xs: '8px' },
//             top: '8px',
//             cursor: 'pointer',
//             zIndex: 1,
//           }}
//         >
//           <BagCross />
//         </Box>

//         {/* Video Content */}
//         <Stack
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             position: 'relative',
//             px: { md: 5, xs: 0 },
//             borderRadius: { md: '30px', xs: 0 },
//             border: '1px solid transparent',
//             overflow: 'hidden',
//             height: { xl: '502px', xs: 'auto' },
//           }}
//         >
//           <iframe
//             width={matches ? '870' : '100%'}
//             height={matches ? '502' : 'auto'}
//             src="https://www.youtube.com/embed/cOKsDi_txSo?rel=0&controls=0&si=7kOQJ9DiZrtJMUO8"
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             style={{ border: 'none' }}
//           />
//         </Stack>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default  VideoPopup;

import { Box, Dialog, DialogContent, Stack } from '@mui/material';
import {  TagCross } from 'iconsax-react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ReactPlayer from 'react-player';

interface VideoPopupProps {
  open: boolean;
  handleClose: () => void;
  url:any
}

const VideoPopup: React.FC<VideoPopupProps> = ({ open, handleClose,url }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      aria-labelledby="video-dialog-title"
      sx={{ overflow: 'hidden' }}
    >
      <DialogContent>
        {/* Close Button */}
        <Box
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: { xl: '33px', xs: '8px' },
            top: '8px',
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          <TagCross />
        </Box>

        {/* Video Content */}
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            px: { md: 5, xs: 0 },
            borderRadius: { md: '30px', xs: 0 },
            border: '1px solid transparent',
            overflow: 'hidden',
            width: '100%',
            height: matches ? '502px' : 'auto',
          }}
        >
          <ReactPlayer
            url={`/video/${url}`} 
            playing={true} // Auto-play
            controls={true} // Show player controls
            width="100%"
            height="100%"
          />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPopup;
