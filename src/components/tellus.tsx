// material-ui
import { Box, Button, CircularProgress } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import { Dialog, DialogContent } from '@mui/material';
const tellusImg = '/assets/images/icons/tellus.png';

// project-imports
import PopupTransition from 'components/@extended/Transitions';
import { useEffect, useState } from 'react';
import CustomTextField from 'components/CustomTextField';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import axios from 'utils/axios';
const xcicle = '/assets/images/home/x-circle.png';
// import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
// import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// ==============================|| CUSTOMER - DELETE ||============================== //

interface DeleteChildrenModalProps {
  open: boolean;
  onClose: any;
  data: any;
  fields: any;
  notes?: any;
  setFields?: any;
  setFilteredData?: any;
  isMarketPlace?: boolean;
  daycareList?: any;
  // setShowTopFrom?: any;
  setNotes?: any;
}
const DeleteChildrenModal: React.FC<DeleteChildrenModalProps> = ({
  open,
  onClose,
  data,
  fields,
  notes,
  setFields,
  setFilteredData,
  isMarketPlace,
  daycareList,
  setNotes
}) => {
  const router = useRouter();

  console.log('data123', fields)
  const [parentInfo, setParentInfo] = useState<any>({
    name: '',
    isName: false,
    email: '',
    isEmail: false,
    phone: '',
    isPhone: false,
    zipCode: '',
    isZipcode: false
  });
  const [isLoading, setIsLoading] = useState<any>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [porvidersList, setPorvidersList] = useState<any>([]);

  const handleCloseModal = () => setModalOpen(false);
  // const navigate = useNavigate();
  const [number, setNumber] = useState<any>(null);
 useEffect(() => {
    // console.log(window.location.pathname.split('/'), 'iiiiiiiihhhh');
    let _tempData: any = [];
    if (data && data.length > 0) {
      data.forEach((item: any) => {
        if (item?.isChecked) {
          _tempData.push(item.name);
        }
      });
    }
    console.log(_tempData, 'porvidersList')
    setPorvidersList(_tempData);
  }, [data]);
  const handleSubmit = async () => {
    setIsLoading(true);
    const _tempParentInfo: any = { ...parentInfo };
    let _tempCount = 0;
    if (_tempParentInfo.name == '') {
      _tempParentInfo.isName = true;
      _tempCount++;
    } else {
      _tempParentInfo.isName = false;
    }
    // if (_tempParentInfo.phone == '' || _tempParentInfo.phone.length != 10) {
    //   _tempParentInfo.isPhone = true;
    //   _tempCount++;
    // } else {
    //   _tempParentInfo.isPhone = false;
    // }
    if (_tempParentInfo.zipCode == '' || _tempParentInfo.zipCode.length !== 5) {
      _tempParentInfo.isZipcode = true;
      _tempCount++;
    } else {
      _tempParentInfo.isZipcode = false;
    }
    if (_tempParentInfo.email == '') {
      _tempParentInfo.isEmail = true;
      _tempCount++;
    } else {
      const isValidEmail = _tempParentInfo.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (!isValidEmail) {
        _tempParentInfo.isEmail = true;
        _tempCount++;
      } else {
        _tempParentInfo.isEmail = false;
      }
    }
    console.log(_tempCount);
    if (_tempCount !== 0) {
      setParentInfo({ ..._tempParentInfo });
      setIsLoading(false);
      return;
    } else {
      setParentInfo({ ..._tempParentInfo });

      const _tempPInfo: any = { name: parentInfo.name, phone: parentInfo.phone, zipCode: parentInfo.zipCode, email: parentInfo.email };
      let _tempFields: any = [];
      fields.forEach((element: any) => {
        let _temp = {};
        Object.keys(element.selectedDays).forEach((key: any) => {
          if (element.selectedDays[key] == true) {
            _temp = { ..._temp, [key]: true };
          }
        });
        if (isMarketPlace) {
          _tempFields.push({
            name: element.name,
            date_of_birth: element.date_of_birth,
            is_special: element.is_special,
            selectedDays: _temp,
            tution_fee: element.tution_fee,
            start_date: element.start_date,
            program_id: element.program_id
          });
        } else {
          _tempFields.push({
            name: element.name,
            date_of_birth: element.date_of_birth,
            is_special: element.is_special,
            selectedDays: _temp,
            start_date: element.start_date,
            program_id: element.program_id
          });
        }
      });
      let _tempData: any = [];
      if (data && data.length > 0) {
        data.forEach((item: any) => {
          if (item.isChecked) {
            _tempData.push(item.id);
          }
        });
      }
      const _data = {
        children_data: _tempFields,
        parent_data: { ..._tempPInfo },
        selected_centers: isMarketPlace ? _tempData : data,
        notes: notes,
        is_market_place: isMarketPlace
      };
      await axios({
        method: 'post',
        url: 'api/search/market_place_bid',
        data: _data,
        headers: { 'Content-Type': 'application/json' }
      })
        .then(async (response) => {
          if (response.data.status == 'fail') {
            onClose();
            dispatch(
              openSnackbar({
                open: true,
                message: response.data.message,
                variant: 'alert',
                alert: {
                  color: 'error'
                },
                close: false
              })
            );
          }
          if (response.data.status == 'pass') {
            setIsLoading(false);
            setModalOpen(true);
            setNotes('');
            if (isMarketPlace) {
              // setShowTopFrom(true);
              const _temp = daycareList.map((it: any) => ({ ...it, isChecked: false }));
              setFilteredData([..._temp]);
            }
            setParentInfo({ name: '', isName: false, email: '', isEmail: false, phone: '', isPhone: false, zipCode: '', isZipcode: false });
            setFields([
              {
                name: '',
                isName: false,
                date_of_birth: '',
                isDob: false,
                is_special: false,
                is_full_week: true,
                start_date: '',
                isStartDate: false,
                tution_fee: '',
                isTutionFee: false,
                isPrice: false,
                program_id: '',
                isDaySelected: false,
                selectedDays: {
                  monday: true,
                  tuesday: true,
                  wednesday: true,
                  thursday: true,
                  friday: true
                }
              }
            ]);
            onClose();
            dispatch(
              openSnackbar({
                open: true,
                message: 'Bid placed successfully and we will respond soon.',
                variant: 'alert',
                alert: {
                  color: 'success'
                },
                close: false
              })
            );
          }
        })
        .catch((error) => {
          console.log('erro uploading', error.message);
          setIsLoading(false);

          dispatch(
            openSnackbar({
              open: true,
              message: Object.keys(error?.data).map((_data: any) => (
                <Typography sx={{ fontSize: '14px' }}>{error?.data[_data]}</Typography>
              )),
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        });
    }
  };
  console.log('formattedValue ......', parentInfo);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      keepMounted
      TransitionComponent={PopupTransition}
      maxWidth="lg"
      sx={{
        backdropFilter: 'blur(5px)',
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            borderRadius: '20px',
            width: '100%',
            maxWidth: { xs: '298px', md: '700px' }, // Set your width here
            maxHeight: { xs: '800px', md: !isMarketPlace ? '450px' : '630px' }
          }
        }
      }}
      aria-labelledby="column-delete-title"
      aria-describedby="column-delete-description"
    >
      <DialogContent sx={{ p: 0 }}>
        <Box tabIndex={-1} onClick={onClose} sx={{ position: 'absolute', right: { lg: '13px', xs: '3px' }, top: '2px', cursor: 'pointer', zIndex: 1 }}>
          {/* <img src={xcicle} height={'20px'} alt="xcicle" /> */}
          <Image
              height={20}
              width={20}
              src={xcicle}
              alt={'xcicle'}
            />
        </Box>
        <Grid container alignItems={'center'}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: 0,
              backgroundImage: `url(${tellusImg})`,
              m: { xs: 2, md: 0 },
              borderRadius: { xs: '20px', md: 0 },
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: { xs: '380px', md: !isMarketPlace ? '450px' : '630px' },
              maxHeight: { xs: '240px', md: '650px' }
            }}
          >
            <Typography sx={{ color: 'transparent' }}>test</Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ px: 2, my: 2 }}>
            <Typography variant="bodytext1" sx={{ my: 2 }}>
              Tell us about Yourself
            </Typography>
            <Typography variant="subtitle2">Please fill in where you want to receive your details</Typography>
            {/* <Box sx={{ height: { xs: '200px', md: '220px' }, maxHeight: { xs: '400px', md: '300px' }, overflowY: 'scroll', px: 1 }}> */}
            <Box sx={{ px: 1 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between" mt={2} flexWrap={'wrap'}>
                <CustomTextField
                  placeholder="Your Name"
                  value={parentInfo.name}
                  onChange={(e: any) => {
                    const value = e.target.value;
                    setParentInfo({ ...parentInfo, name: value });
                  }}
                  style={{ mb: 1 }}
                  validationError={parentInfo.isName}
                  isMarketPlace={true}
                  errorMessage="Enter Your Name"
                />
                <TextField
                  placeholder="Phone Number *"
                  sx={{
                    width: '100%',
                    background: 'white',
                    outline: 'none',
                    border: 'none',
                    borderRadius: 1,
                    mb: number ? 0 : 2,
                    '& .MuiOutlinedInput-input': {
                      padding: '9px',
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#1D2630', // Placeholder text color
                      fontSize: '14px',
                      opacity: '0.8',
                      pl: 0.4
                    },
                  }}
                  InputProps={{
                    style: { fontSize: '14px' }
                  }}
                  value={parentInfo.phone}
                  onChange={(e: any) => {
                    const inputValue = e.target.value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-digit characters
                    let formattedValue = '';
                    for (let i = 0; i < sanitizedValue.length; i++) {
                      if (i === 3 || i === 6) {
                        formattedValue += '-';
                      }
                      formattedValue += sanitizedValue[i];
                    }
                    if (e.target.value.length > 12) {
                      debugger;
                      setNumber(true);
                    } else {
                      setNumber(false);
                    }
                    setParentInfo({ ...parentInfo, phone: formattedValue });
                    // setNumber(formattedValue);
                  }}
                />
                {/* <CustomTextField
                  placeholder="Enter Your Phone Number"
                  type={'number'}
                  style={{ mb: 1 }}
                  value={parentInfo.phone}
                  onChange={(e: any) => {
                    const inputValue = e.target.value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-digit characters
                    let formattedValue = '';
                    for (let i = 0; i < sanitizedValue.length; i++) {
                      if (i === 3 || i === 6) {
                        formattedValue += '-';
                      }
                      formattedValue += sanitizedValue[i];
                    }
                    // setNumber(formattedValue);
                    // if (e.target.value.length == 12) {
                    //   setNumberValidation(false);
                    // } else {
                    //   setNumberValidation(true);
                    // }
                    // setNumber(formattedValue);
                    // console.log("formattedValue ......",formattedValue )
                    // setParentInfo({ ...parentInfo, phone: formattedValue });
                  }}
                  // onChange={(e: any) => {
                  //   debugger;
                  //   const cleaned = e.target.value.replace(/\D/g, '-');
                  //   const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
                  //   console.log('match', match);
                  //   if (match) {
                  //     setParentInfo({ ...parentInfo, phone: `${match[1]}-${match[2]}-${match[3]}` });
                  //   }else{
                  //     setParentInfo({ ...parentInfo, phone: e.target.value });
                  //   }
                  // }}
                  validationError={parentInfo.isPhone}
                  isMarketPlace={true}
                  errorMessage="Phone Number Must Be 10 Digits"
                /> */}
              </Box>
              {number && (
                <Typography sx={{ color: 'red', fontSize: '12px', mt: 0, mb: number ? 2 : 0 }} variant="p1">
                  Phone Number Must Be 10 Digits
                </Typography>
              )}
              <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap={'wrap'}>
                <CustomTextField
                  placeholder="Zip Code"
                  type={'number'}
                  style={{ mb: 1 }}
                  value={parentInfo.zipCode}
                  onChange={(e: any) => {
                    setParentInfo({ ...parentInfo, zipCode: e.target.value });
                  }}
                  validationError={parentInfo.isZipcode}
                  isMarketPlace={true}
                  errorMessage="Enter Valid Zip Code"
                />
                <CustomTextField
                  placeholder="Enter Valid Email"
                  value={parentInfo.email}
                  onChange={(e: any) => {
                    setParentInfo({ ...parentInfo, email: e.target.value });
                  }}
                  validationError={parentInfo.isEmail}
                  isMarketPlace={true}
                  errorMessage="Enter Valid Email"
                />
              </Box>
              {isMarketPlace && (
                <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap={'wrap'}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Please enter additional information that will help negotiate the rates like special need and schedule etc."
                    value={notes}
                    onChange={(e: any) => {
                      setNotes(e.target.value);
                    }}
                    InputProps={{
                      style: {
                        zIndex: 0,
                        fontSize: '14px',
                        color: '#5A5A5A' // Text color
                      }
                    }}
                    sx={{
                      my: 2,
                      '& .MuiInputBase-input::placeholder': {
                        color: '#5e5e5e', // Placeholder text color
                        fontSize: '14px'
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#d3d3d3' // Border color
                        },
                        '&:hover fieldset': {
                          borderColor: '#d3d3d3' // Hover Border Color
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#d3d3d3' // Focused Border Color
                        }
                      }
                    }}
                  />
                </Box>
              )}
            </Box>
            <Box sx={{ maxHeight: '130px', overflowY: 'scroll'}}>
              {isMarketPlace && fields?.map((item: any, index: any) => (
                <Stack mb={'3px'} key={index}>
                  <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>You are going to submit an offer for your child, <strong>{item.name}</strong>, born on <strong>{new Date(item.date_of_birth).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}</strong>, with a proposed tuition rate of <strong>${item.tution_fee}</strong></Typography>
                </Stack>
              ))}
               <Typography variant="p" component={'div'} >
                 Your selected Providers:
                </Typography>
                {porvidersList.map((item: any, ind: any) => <Typography variant="p1"  component={'div'} >
              {ind + 1}. {item }
                </Typography>)}
            </Box>
            <Box display="flex" justifyContent="center" sx={{ background: '#fff', position: 'sticky', py: 2 }}>
              <Button
                variant="contained"
                sx={{
                  background: '#000',
                  borderRadius: '20px',
                  width: '100%',
                  '&:hover': {
                    background: 'rgba(0, 0, 0, 0.8)' // Adjust the alpha channel (0.8) as needed
                  }
                }}
                onClick={() => {
                  !isLoading && handleSubmit();
                }}
              >
                {isLoading ? (
                  <CircularProgress style={{ height: 'auto !important', width: 'auto !important', padding: '4px 0px' }} color="inherit" />
                ) : (
                  'Submit'
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Dialog
          open={modalOpen}
          onClose={handleCloseModal}
          keepMounted
          TransitionComponent={PopupTransition}
          maxWidth="xs"
          sx={{
            backdropFilter: 'blur(5px)',
            '& .MuiDialog-container': {
              '& .MuiPaper-root': {
                borderRadius: { xs: '10px', md: '50px' },
                width: '100%',
                maxWidth: { xs: '400px', md: '630px' } // Set your width here
              }
            }
          }}
          aria-labelledby="column-delete-title"
          aria-describedby="column-delete-description"
        >
          <DialogContent sx={{ p: '20px 26px', backgroundColor: '#FFF2D6' }}>
            <Box
              onClick={() => {
                setModalOpen(false);
                router.push('/');
              }}
              sx={{ position: 'absolute', right: { xs: '10px', md: '40px' }, top: 1, cursor: 'pointer', zIndex: 1 }}
            >
               <Image
              height={20}
              width={20}
              src={xcicle}
              alt={'xcicle'}
            />
              {/* <img src={xcicle} height={'20px'} alt="xcicle" /> */}
            </Box>
            <Grid container alignItems={'center'} sx={{ alignItems: { xs: 'flex-start', md: 'center' } }}>
              <Grid item xs={2} md={1}>
                {/* <img style={{width: '100%'}} src={tellusImg}/> */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M33 16.62V18C32.9982 21.2346 31.9508 24.382 30.014 26.9727C28.0773 29.5635 25.3549 31.4587 22.253 32.3758C19.1511 33.293 15.8359 33.1828 12.8017 32.0619C9.76752 30.9409 7.17698 28.8691 5.41644 26.1556C3.6559 23.442 2.81969 20.2321 3.03252 17.0045C3.24534 13.7768 4.49581 10.7045 6.59742 8.2456C8.69903 5.78672 11.5392 4.07307 14.6943 3.36021C17.8494 2.64736 21.1504 2.9735 24.105 4.29"
                    stroke="#FF7A00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M33 6L18 21.015L13.5 16.515" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Grid>
              <Grid item xs={10} md={11}>
                <Typography variant="bodytext1" sx={{ fontSize: '16px', mb: { xs: 2, md: 0 } }}>
                  Congratulation on submitting your {isMarketPlace ? 'Offer' : 'request'}!
                </Typography>
                <Typography variant="subtitle2" sx={{ fontSize: '14px' }}>
                  We are going to negotiate this {isMarketPlace ? 'Offer' : 'request'} on your behalf with the selected Providers.
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteChildrenModal;
