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
                        Hãy nói xin chào với gia sư Tiếng Anh riêng của bạn
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box style={{ paddingLeft: '20px', paddingRight: '0px' }}>
                      <Typography color="GrayText" component="h4">
                        Trở nên thuần thục nhanh hơn thông qua các bài giảng trò chuyện một kèm một
                        qua video phù hợp với các mục tiêu của bạn.
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
                            Bắt đầu
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
                    alt="Phiên giảng dạy"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6} className="Grid-items">
                  <Typography variant="h3">Đắm mình vào Tiếng Anh ở mọi nơi</Typography>
                  <Box className="Box-padding"></Box>
                  <Typography variant="body1">
                    Hình thành độ thành thạo và sự tự tin sử dụng Tiếng Anh thông qua các cuộc trò
                    chuyện thực tế với các gia sư thân thiện đến từ Mỹ, Anh, Úc, và các nước khác.
                    Tất cả những gì bạn cần là thiết bị của bạn!
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
                    Bắt đầu học
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
                <Typography variant="h3">Thực hiện nhiều hơn với Cambly</Typography>
                <Box></Box>
                <Container maxWidth="sm">
                  <Typography color="GrayText">
                    Mở khóa quyền trải nghiệm học tập cá nhân hóa của chúng tôi để đạt được các mục
                    tiêu học tập Tiếng Anh nhanh hơn. Khám phá mức độ thú vị và dễ dàng của việc học
                    Tiếng Anh — chỉ có trên Cambly!
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
                    <Tab label="Tìm Kiếm Gia Sư" {...a11yProps(0)} />
                    <Tab label="Giờ Học Linh Hoạt" {...a11yProps(1)} />
                    <Tab label="Chương Trình Giảng Dạy Chuyên Ngành" {...a11yProps(2)} />
                    <Tab label="Lớp Học Tương Tác" {...a11yProps(3)} />
                    <Tab label="Đánh Giá Bài Học" {...a11yProps(4)} />
                  </Tabs>
                  <TabPanel
                    value={value}
                    index={0}
                    imgsrc={
                      'https://www.cambly.com/fe/static/landing_page/features/Tutor%20Search.webp'
                    }
                  >
                    Tìm gia sư hoàn hảo cho nhu cầu và sở thích của bạn.
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={1}
                    imgsrc={
                      'https://www.cambly.com/fe/static/landing_page/features/Scheduling.webp'
                    }
                  >
                    Bắt đầu bài học 1-1 của bạn bất cứ khi nào, tại bất cứ đâu. Đặt lịch trước hoặc
                    gọi ngay cho 1 gia sư đang trực tuyến!
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={2}
                    imgsrc={'https://www.cambly.com/fe/static/landing_page/features/courses.webp'}
                  >
                    Tập trung vào các mục tiêu cụ thể của bạn với các khóa học có hướng dẫn của
                    chúng tôi, bao gồm luyện thi học thuật, tiếng Anh thương mại, luyện đàm thoại,
                    và nhiều hơn nữa.
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={3}
                    imgsrc={'https://www.cambly.com/fe/static/landing_page/features/Classroom.webp'}
                  >
                    Hình thành các kỹ năng mới cùng gia sư của bạn trong từng bài học - các công cụ
                    học tập có quền hạn của chúng tôi sẵn sàng giúp bạn trên mọi bước đường.
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={4}
                    imgsrc={
                      'https://www.cambly.com/fe/static/landing_page/features/Lesson%20History.webp'
                    }
                  >
                    Củng cố các khái niệm và từ vựng mới bằng cách xem lại các bài học được ghi lại
                    của bạn.
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
                  <span>Xem các gói học</span>
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
                      <Typography variant="h4">Đăng ký một lần, truy cập không giới hạn</Typography>
                      <Box></Box>
                      <Typography variant="body1">
                        Tất cả các gói học Cambly cho phép bạn tuỳ chọn gia sư và học tập không giới
                        hạn các khóa học sẵn có của chúng tôi. Bạn có thể đặt lịch dài hạn với gia
                        sư bạn yêu thích hoặc gặp gỡ gia sư mới trong mỗi bài học nhé!
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
                          <Typography variant="h4">Dành cho các tổ chức</Typography>
                          <SvgIcon viewBox="">
                            <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
                          </SvgIcon>
                          <Box></Box>
                          <Typography variant="body1">
                            Trao quyền cho nhóm của bạn với các kỹ năng Tiếng Anh thực hành, thực tế
                            mà họ cần để vượt trội trong công việc mang tính toàn cầu.
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
                          <Typography variant="h4">Dành cho trẻ em</Typography>
                          <SvgIcon viewBox="">
                            <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
                          </SvgIcon>
                          <Box></Box>
                          <Typography variant="body1">
                            Mở khóa tương lai toàn cầu cho con bạn với những bài học thú vị và những
                            trò chơi để các em nói Tiếng Anh từ ngày đầu tiên
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
                  <Typography variant="h3">Cambly đang tiếp tục</Typography>
                  <Box></Box>
                  <Typography variant="h6" style={{ fontWeight: '400' }}>
                    Bắt đầu học hoặc đặt lịch trước bất cứ khi nào, tại bất cứ đâu với các ứng dụng
                    dành cho Android và iPhone của chúng tôi.
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
                    Giới thiệu chung
                  </Typography>
                  <Box>
                    <Box id="content-container">
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Khóa học
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Blog
                        </Button>
                      </Link>
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Sự nghiệp
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
                          Cambly dành cho các tổ chức
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
                          Trở thành sứ giả
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Typography className="heading" variant="overline">
                    Liên kết hữu ích
                  </Typography>
                  <Box>
                    <Box id="content-container">
                      <Link underline="hover">
                        <Button className="content-button" variant="text" size="large">
                          Trung Tâm Trợ Giúp Của Cambly
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
