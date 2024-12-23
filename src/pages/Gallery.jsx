import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Modal,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Gallery categories and items
const categories = [
  { value: "all", label: "All" },
  { value: "suits", label: "Suits" },
  { value: "formal", label: "Formal Wear" },
  { value: "wedding", label: "Wedding" },
  { value: "alterations", label: "Alterations" },
];

const galleryItems = [
  {
    id: 1,
    category: "suits",
    title: "Classic Three-Piece Suit",
    description: "Hand-tailored wool suit with perfect fit and finish",
    image: "/path-to-image.jpg", // Replace with actual image paths
    tags: ["Bespoke", "Wool", "Three-Piece"],
  },
  // Add more gallery items here
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
    setSelectedImage(filteredItems[currentImageIndex]);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
    setSelectedImage(filteredItems[currentImageIndex]);
  };

  const ImageWithLazyLoading = ({ image, title, onClick }) => (
    <Box
      sx={{
        position: "relative",
        paddingTop: "100%", // 1:1 Aspect Ratio
        width: "100%",
        background: "rgba(0,0,0,0.1)",
      }}
    >
      <LazyLoadImage
        src={image}
        alt={title}
        effect="blur"
        onClick={onClick}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          cursor: "pointer",
        }}
        wrapperProps={{
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          },
        }}
      />
    </Box>
  );

  return (
    <Box py={8}>
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          textAlign="center"
          mb={2}
          color="primary.main"
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Our Gallery
        </Typography>
        <Typography
          variant="h4"
          textAlign="center"
          mb={6}
          color="text.secondary"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            fontWeight: "light",
          }}
        >
          Explore our collection of bespoke tailoring and craftsmanship
        </Typography>

        {/* Category Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              "& .MuiTab-root": {
                color: "text.secondary",
                "&.Mui-selected": {
                  color: "primary.main",
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "primary.main",
              },
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category.value}
                value={category.value}
                label={category.label}
              />
            ))}
          </Tabs>
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={3}>
          {filteredItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "background.paper",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                    "& .MuiCardContent-root": {
                      bgcolor: "primary.main",
                      "& .MuiTypography-root": {
                        color: "common.white",
                      },
                    },
                  },
                }}
              >
                <ImageWithLazyLoading
                  image={item.image}
                  title={item.title}
                  onClick={() => handleImageClick(item, index)}
                />
                <CardContent
                  sx={{
                    transition: "all 0.3s ease-in-out",
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "primary.main" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                      mt: 2,
                    }}
                  >
                    {item.tags.map((tag) => (
                      <Typography
                        key={tag}
                        variant="caption"
                        sx={{
                          color: "grey.500",
                          bgcolor: "background.default",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Modal */}
        <Modal
          open={!!selectedImage}
          onClose={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              outline: "none",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "common.white",
                bgcolor: "rgba(0,0,0,0.5)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
              }}
            >
              <CloseIcon />
            </IconButton>
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                color: "common.white",
                bgcolor: "rgba(0,0,0,0.5)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                color: "common.white",
                bgcolor: "rgba(0,0,0,0.5)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
              }}
            >
              <NavigateNextIcon />
            </IconButton>
            {selectedImage && (
              <LazyLoadImage
                src={selectedImage.image}
                alt={selectedImage.title}
                effect="blur"
                style={{
                  maxWidth: "100%",
                  maxHeight: "90vh",
                  objectFit: "contain",
                }}
              />
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}

export default Gallery;
