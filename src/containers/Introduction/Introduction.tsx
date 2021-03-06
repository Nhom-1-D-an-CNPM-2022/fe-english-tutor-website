import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Introduction.scss';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  imgsrc: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, imgsrc } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }} style={{ display: 'flex' }}>
          <LazyLoadImage
            src={imgsrc} // use normal <img> attributes as props
            effect="opacity"
            style={{ display: 'inline-block', width: '100%' }}
          />
          <Typography style={{ width: '300px' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
export const Introduction = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container style={{ position: 'relative' }}>
        <Box className="Box-Container">
          <div>
            <Container maxWidth="lg" className="con-hello-tutor">
              <Grid
                container
                spacing={{ xs: 1 }}
                alignItems="center"
                className="container-hello-tutor"
              >
                <Grid
                  container
                  item
                  spacing={{ xs: 3 }}
                  alignItems="center"
                  xs={12}
                  md={6}
                  lg={6}
                  className="hello-tutor-start"
                >
                  <Grid item xs={12}>
                    <Box style={{ paddingLeft: '20px', paddingRight: '0px' }}>
                      <Typography variant="h3">
                        H??y n??i xin ch??o v???i gia s?? Ti???ng Anh ri??ng c???a b???n
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box style={{ paddingLeft: '20px', paddingRight: '0px' }}>
                      <Typography color="GrayText" component="h4">
                        Tr??? n??n thu???n th???c nhanh h??n th??ng qua c??c b??i gi???ng tr?? chuy???n m???t k??m m???t
                        qua video ph?? h???p v???i c??c m???c ti??u c???a b???n.
                      </Typography>
                    </Box>
                  </Grid>
                  <Box className="Box-padding"></Box>
                  <Grid item xs={12}>
                    <Box style={{ paddingLeft: '20px', paddingRight: '0px' }}>
                      <Grid item xs={12}>
                        <form noValidate>
                          <FormControl variant="filled">
                            <InputLabel htmlFor="component-filled">Email</InputLabel>
                            <FilledInput id="component-filled" value={name} />
                          </FormControl>
                          <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            disableElevation={true}
                            style={{ margin: '0px 5px', height: '56px' }}
                          >
                            B???t ?????u
                          </Button>
                        </form>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  alignItems="center"
                  xs={12}
                  md={6}
                  lg={6}
                  className="hello-tutor-image"
                >
                  <Box>
                    <Paper variant="elevation" elevation={24} id="tutor-main-image">
                      <Paper variant="elevation" elevation={15} id="tutor-sub-image">
                        <Box className="image-box">
                          <Paper variant="elevation" elevation={3} id="img-flag">
                            <img
                              src="https://www.cambly.com/fe/static/landing_page/flags/US.svg"
                              alt="flag"
                              style={{ width: '40px', height: '40px' }}
                            />
                          </Paper>
                          <Box style={{ marginLeft: '8px' }}>
                            <Typography>Christina P.</Typography>
                            <Typography variant="body2" color="GrayText">
                              Digital Marketer
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Box>
        <Box className="Box-Container">
          <Box className="Box-root">
            <Container maxWidth="lg" className="Container-root">
              <Grid container spacing={{ xs: 3 }} alignItems="center" className="Grid-root" xs>
                <Grid item xs={12} md={6} lg={6} className="Grid-items">
                  <LazyLoadImage
                    src="https://www.cambly.com/fe/static/landing_page/chat.webp" // use normal <img> attributes as props
                    effect="opacity"
                    alt="Phi??n gi???ng d???y"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6} className="Grid-items">
                  <Typography variant="h3">?????m m??nh v??o Ti???ng Anh ??? m???i n??i</Typography>
                  <Box className="Box-padding"></Box>
                  <Typography variant="body1">
                    H??nh th??nh ????? th??nh th???o v?? s??? t??? tin s??? d???ng Ti???ng Anh th??ng qua c??c cu???c tr??
                    chuy???n th???c t??? v???i c??c gia s?? th??n thi???n ?????n t??? M???, Anh, ??c, v?? c??c n?????c kh??c.
                    T???t c??? nh???ng g?? b???n c???n l?? thi???t b??? c???a b???n!
                  </Typography>
                  <Box className="Box-padding"></Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    tabIndex={0}
                    type="button"
                    id="button-start"
                  >
                    B???t ?????u h???c
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
        <Box className="Box-Container">
          <Box className="Box-Background">
            <Container maxWidth="lg" className="DoMore-Container">
              <Box className="DoMore-Header">
                <Typography variant="h3">Th???c hi???n nhi???u h??n v???i Cambly</Typography>
                <Box></Box>
                <Container maxWidth="sm">
                  <Typography color="GrayText">
                    M??? kh??a quy???n tr???i nghi???m h???c t???p c?? nh??n h??a c???a ch??ng t??i ????? ?????t ???????c c??c m???c
                    ti??u h???c t???p Ti???ng Anh nhanh h??n. Kh??m ph?? m???c ????? th?? v??? v?? d??? d??ng c???a vi???c h???c
                    Ti???ng Anh ??? ch??? c?? tr??n Cambly!
                  </Typography>
                </Container>
              </Box>
              <Box>
                <div className="Tab-Container">
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                  >
                    <Tab label="T??m Ki???m Gia S??" {...a11yProps(0)} />
                    <Tab label="Gi??? H???c Linh Ho???t" {...a11yProps(1)} />
                    <Tab label="Ch????ng Tr??nh Gi???ng D???y Chuy??n Ng??nh" {...a11yProps(2)} />
                    <Tab label="L???p H???c T????ng T??c" {...a11yProps(3)} />
                    <Tab label="????nh Gi?? B??i H???c" {...a11yProps(4)} />
                  </Tabs>
                  <TabPanel
                    value={value}
                    index={0}
                    imgsrc={
                      'https://www.cambly.com/fe/static/landing_page/features/Tutor%20Search.webp'
                    }
                  >
                    T??m gia s?? ho??n h???o cho nhu c???u v?? s??? th??ch c???a b???n.
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={1}
                    imgsrc={
                      'https://www.cambly.com/fe/static/landing_page/features/Scheduling.webp'
                    }
                  >
                    B???t ?????u b??i h???c 1-1 c???a b???n b???t c??? khi n??o, t???i b???t c??? ????u. ?????t l???ch tr?????c ho???c
                    g???i ngay cho 1 gia s?? ??ang tr???c tuy???n!
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={2}
                    imgsrc={'https://www.cambly.com/fe/static/landing_page/features/courses.webp'}
                  >
                    T???p trung v??o c??c m???c ti??u c??? th??? c???a b???n v???i c??c kh??a h???c c?? h?????ng d???n c???a
                    ch??ng t??i, bao g???m luy???n thi h???c thu???t, ti???ng Anh th????ng m???i, luy???n ????m tho???i,
                    v?? nhi???u h??n n???a.
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={3}
                    imgsrc={'https://www.cambly.com/fe/static/landing_page/features/Classroom.webp'}
                  >
                    H??nh th??nh c??c k??? n??ng m???i c??ng gia s?? c???a b???n trong t???ng b??i h???c - c??c c??ng c???
                    h???c t???p c?? qu???n h???n c???a ch??ng t??i s???n s??ng gi??p b???n tr??n m???i b?????c ???????ng.
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={4}
                    imgsrc={
                      'https://www.cambly.com/fe/static/landing_page/features/Lesson%20History.webp'
                    }
                  >
                    C???ng c??? c??c kh??i ni???m v?? t??? v???ng m???i b???ng c??ch xem l???i c??c b??i h???c ???????c ghi l???i
                    c???a b???n.
                  </TabPanel>
                </div>
              </Box>
            </Container>
          </Box>
        </Box>
        <Box className="Box-Container">
          <Box>
            <Box className="Box-root">
              <Box className="Box-top-content">
                <Button variant="text" className="View-courses">
                  <span>Xem c??c g??i h???c</span>
                </Button>
              </Box>
              <Box>
                {/* <SvgIcon viewBox="0 0 1440 320">
                  <path
                    fill="#399EA7"
                    fillOpacity={1}
                    d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,117.3C672,85,768,75,864,90.7C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  />
                </SvgIcon> */}
                <Container maxWidth="lg">
                  <Grid container alignItems="center">
                    <Grid item md={2}></Grid>
                    <Grid item xs={12} md={4}>
                      <Box></Box>
                      <Typography variant="h4">????ng k?? m???t l???n, truy c???p kh??ng gi???i h???n</Typography>
                      <Box></Box>
                      <Typography variant="body1">
                        T???t c??? c??c g??i h???c Cambly cho ph??p b???n tu??? ch???n gia s?? v?? h???c t???p kh??ng gi???i
                        h???n c??c kh??a h???c s???n c?? c???a ch??ng t??i. B???n c?? th??? ?????t l???ch d??i h???n v???i gia
                        s?? b???n y??u th??ch ho???c g???p g??? gia s?? m???i trong m???i b??i h???c nh??!
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <LazyLoadImage
                        src="https://www.cambly.com/fe/static/landing_page/world.webp" // use normal <img> attributes as props
                        effect="opacity"
                        style={{ display: 'inline-block', width: '100%' }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="Box-Container">
          <Container maxWidth="lg">
            <Box>
              <Grid container spacing={{ xs: 6 }}>
                <Grid item xs={12} md={6} style={{ display: 'flex' }}>
                  <Link underline="none" style={{ display: 'flex', color: 'black' }}>
                    <Grid container spacing={{ xs: 4 }}>
                      <Grid item xs={3} sm={2} md={3}>
                        <LazyLoadImage
                          src="https://www.cambly.com/fe/static/landing_page/business.svg" // use normal <img> attributes as props
                          effect="opacity"
                          style={{ display: 'inline-block', width: '100%' }}
                        />
                      </Grid>
                      <Grid item xs={9} sm={10} md={9}>
                        <Grid container alignItems="center">
                          <Typography variant="h4">D??nh cho c??c t??? ch???c</Typography>
                          <SvgIcon viewBox="">
                            <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
                          </SvgIcon>
                          <Box></Box>
                          <Typography variant="body1">
                            Trao quy???n cho nh??m c???a b???n v???i c??c k??? n??ng Ti???ng Anh th???c h??nh, th???c t???
                            m?? h??? c???n ????? v?????t tr???i trong c??ng vi???c mang t??nh to??n c???u.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex' }}>
                  <Link
                    underline="none"
                    color="primary"
                    style={{ display: 'flex', color: 'black' }}
                  >
                    <Grid container spacing={{ xs: 4 }}>
                      <Grid item xs={3} sm={2} md={3}>
                        <LazyLoadImage
                          src="https://www.cambly.com/fe/static/logos/sm/kids-bird.png" // use normal <img> attributes as props
                          effect="opacity"
                          style={{ display: 'inline-block', width: '100%' }}
                        />
                      </Grid>
                      <Grid item xs={9} sm={10} md={9}>
                        <Grid container alignItems="center">
                          <Typography variant="h4">D??nh cho tr??? em</Typography>
                          <SvgIcon viewBox="">
                            <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
                          </SvgIcon>
                          <Box></Box>
                          <Typography variant="body1">
                            M??? kh??a t????ng lai to??n c???u cho con b???n v???i nh???ng b??i h???c th?? v??? v?? nh???ng
                            tr?? ch??i ????? c??c em n??i Ti???ng Anh t??? ng??y ?????u ti??n
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Box className="Box-Container">
          <Box className="Box-root jss262">
            <Container maxWidth="lg">
              <Grid container justifyContent={'center'} className="continue-grid">
                <Grid item xs={12} md={6} className="left-continue">
                  <Typography variant="h3">Cambly ??ang ti???p t???c</Typography>
                  <Box></Box>
                  <Typography variant="h6" style={{ fontWeight: '400' }}>
                    B???t ?????u h???c ho???c ?????t l???ch tr?????c b???t c??? khi n??o, t???i b???t c??? ????u v???i c??c ???ng d???ng
                    d??nh cho Android v?? iPhone c???a ch??ng t??i.
                  </Typography>
                  <Box></Box>
                  <Box>
                    <div id="appLinks">
                      <a
                        href="https://apps.apple.com/app/cambly-english-teacher/id564024107?mt=8"
                        target={'_blank'}
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.cambly.com/static/images/landing/Download_on_the_App_Store_Badge_EN_135x40.svg"
                          alt="app strore button"
                        />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.cambly.cambly"
                        target={'_blank'}
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
                          alt="google play button"
                        />
                      </a>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box className="right-continue">
                    <LazyLoadImage
                      src="https://www.cambly.com/fe/static/landing_page/phone_mock.webp" // use normal <img> attributes as props
                      effect="opacity"
                      style={{ display: 'inline-block', width: '100%' }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
        <Box className="content-footer">
          <Box className="content-footer-container">
            <Container maxWidth="lg">
              <Grid container>
                <Grid item xs={6} sm={4}>
                  <Typography className="heading" variant="overline">
                    Gi???i thi???u chung
                  </Typography>
                  <Box>
                    <Box id="content-container">
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Kh??a h???c
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Blog
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          S??? nghi???p
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Typography className="heading" variant="overline">
                    Tham gia
                  </Typography>
                  <Box>
                    <Box id="content-container">
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Cambly
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Cambly Kids
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Cambly d??nh cho c??c t??? ch???c
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button
                          href="/tutors"
                          className="content-button"
                          variant="text"
                          size="large"
                        >
                          Become a Tutor
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Tr??? th??nh s??? gi???
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Typography className="heading" variant="overline">
                    Li??n k???t h???u ??ch
                  </Typography>
                  <Box>
                    <Box id="content-container">
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Trung T??m Tr??? Gi??p C???a Cambly
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Cambly (iOS)
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Cambly (Android)
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Cambly Kids (iOS)
                        </Button>
                      </Link>
                      <Link underline="hover" className="content-button-l">
                        <Button className="content-button" variant="text" size="large">
                          Cambly Kids (Android)
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
