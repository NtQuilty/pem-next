import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { IoArrowDown, IoClose } from 'react-icons/io5';
import { projectsData } from './const';

export const Projects = ({ isHomePage }: { isHomePage: boolean }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [showAll, setShowAll] = useState(false);

  const handleOpen = (imagePath: string, title: string) => {
    setSelectedImage(imagePath);
    setSelectedTitle(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  const visibleProjects = showAll && !isHomePage ? projectsData : projectsData.slice(0, 6);

  return (
    <Box
      className={`relative mx-auto bg-[#1a1e2c] pb-[50px] ${isHomePage ? 'pt-[100px]' : 'pt-[100px] md:pt-[150px]'}`}
    >
      <div className="mx-auto px-4 md:max-w-[1350px]">
        <div className="heading-lg mb-10">Наши проекты</div>

        <Box className="flex flex-wrap gap-2 md:gap-3">
          {visibleProjects.map(project => (
            <Box
              key={project.id}
              className="group relative w-full cursor-pointer overflow-hidden rounded-md sm:w-[calc(50%-8px)] md:h-60 md:w-[calc(33.333%-12px)]"
              onClick={() => handleOpen(project.imagePath, project.title)}
            >
              <Box
                component="img"
                src={project.imagePath}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <Box className="project-overlay width-[100%] absolute bottom-0 left-0 right-0 bg-black/70 p-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 md:p-3">
                <Typography variant="subtitle1" className="text-body mb-1">
                  {project.title}
                </Typography>
                <Button variant="text" className="text-body btn-text-sm !p-0">
                  Смотреть проект
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        {!showAll && projectsData.length > 6 && (
          <Box className="mt-3 flex justify-center md:mt-4">
            <Button
              variant="text"
              startIcon={<IoArrowDown />}
              onClick={handleShowMore}
              className="text-body btn-text"
            >
              Показать ещё
            </Button>
          </Box>
        )}
      </div>

      <Modal open={open} onClose={handleClose} className="flex items-center justify-center p-4">
        <div className="rounded-lg bg-[#1a1e2c] p-4 sm:p-6 md:p-8">
          <div className="mb-4 flex items-center justify-between">
            <Typography variant="h6" className="text-sm text-white sm:text-base md:text-lg">
              {selectedTitle}
            </Typography>
            <Button
              onClick={handleClose}
              className="!min-w-0 rounded-full !p-[4px] transition-colors hover:bg-[#3198FF]/20"
              aria-label="close"
            >
              <IoClose size={20} className="text-white" />
            </Button>
          </div>

          <img
            src={selectedImage}
            alt={selectedTitle}
            loading="lazy"
            className="max-h-[75vh] min-h-[50vh] min-w-[70vw] max-w-[85vw] object-contain"
          />
        </div>
      </Modal>
    </Box>
  );
};
