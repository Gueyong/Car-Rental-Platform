import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import "../CSS/Admin.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Box,
  Input,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { useState } from "react";
import PopoverForm from "../components/UptadeButton";
import { useEffect } from "react";

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [offprice, setoffPrice] = useState("");
  const [trans, setTrans] = useState("");
  const [fueltype, setfuelType] = useState("");
  const [seat, setSeat] = useState("");
  const [cartype, setCartype] = useState("");
  const [rating, setRating] = useState("");
  const [km, setKm] = useState("");
  const [loc, setLoc] = useState("");
  const [owner, setOwner] = useState("");
  const [data, setData] = useState("");

  const handleClick = () => {
    const payload = {
      title: title,
      image: image,
      price: price,
      offprice: offprice,
      transmission: trans,
      fueltype: fueltype,
      seat: seat,
      cartype: cartype,
      rating: rating,
      km: km,
      location: loc,
      owner: owner,
    };

    console.log(payload);
    const { token } = JSON.parse(localStorage.getItem("authToken"));
    fetch(`http://localhost:5000/cars/add`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
        authtoken: token,
      },
    });
  };

  const handleDelete = (id) => {
    const { token } = JSON.parse(localStorage.getItem("authToken"));
    console.log(token);
    fetch(`http://localhost:5000/cars/seller/deletecar/${id}`, {
      method: "DELETE",
      headers: {
        authtoken: token,
      },
    });
    window.alert("Car Deleted Successfully");
    window.location.reload();
  };

  useEffect(() => {
    fetch("https://taupe-dhole-boot.cyclic.app/cars/allcars?page=9")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);
  return (
    <>
      <div
        className="motherBox"
        style={{ display: "flex", gap: "200px", marginTop: "50px" }}
      >
        <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
          Add Cars
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Add Cars</DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <Input
                    ref={firstField}
                    id="title"
                    placeholder="Please enter user Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="url">Image</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                      type="url"
                      id="url"
                      placeholder="Please enter ImageUrl"
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <InputRightAddon>.com</InputRightAddon>
                  </InputGroup>
                </Box>

                {/* <Box>
                <FormLabel htmlFor="owner">Select Owner</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">Segun Adebayo</option>
                  <option value="kola">Kola Tioluwani</option>
                </Select>
              </Box> */}

                {/* <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box> */}
                {/* abhra@gmail.com
              abhra@admin4 */}

                <Box>
                  <FormLabel htmlFor="price">Price</FormLabel>
                  <Input
                    ref={firstField}
                    id="price"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="offprice">OffPrice</FormLabel>
                  <Input
                    ref={firstField}
                    id="offprice"
                    placeholder="OffPrice"
                    onChange={(e) => setoffPrice(e.target.value)}
                    type="number"
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="transmission">Transmission</FormLabel>
                  <Input
                    ref={firstField}
                    id="transmission"
                    placeholder="Transmission"
                    onChange={(e) => setTrans(e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="fueltype">Fueltype</FormLabel>
                  <Input
                    ref={firstField}
                    id="fueltype"
                    placeholder="Fueltype"
                    onChange={(e) => setfuelType(e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="seat">Seat</FormLabel>
                  <Input
                    ref={firstField}
                    id="seat"
                    placeholder="Seat"
                    onChange={(e) => setSeat(e.target.value)}
                    type="number"
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="cartype">Cartype</FormLabel>
                  <Input
                    ref={firstField}
                    id="cartype"
                    placeholder="Cartype"
                    onChange={(e) => setCartype(e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="rating">Rating</FormLabel>
                  <Input
                    ref={firstField}
                    id="rating"
                    placeholder="Rating"
                    onChange={(e) => setRating(e.target.value)}
                    type="number"
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="km">Km</FormLabel>
                  <Input
                    ref={firstField}
                    id="km"
                    placeholder="Distance"
                    onChange={(e) => setKm(e.target.value)}
                    type="number"
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="location">Location</FormLabel>
                  <Input
                    ref={firstField}
                    id="location"
                    placeholder="Loacation Name"
                    onChange={(e) => setLoc(e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="owner">Owner</FormLabel>
                  <Input
                    ref={firstField}
                    id="owner"
                    placeholder="Owner"
                    onChange={(e) => setOwner(e.target.value)}
                  />
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleClick}>
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <div className="card">
          {data
            ? data.map((ele) => {
                return (
                  <>
                    <div className="singleCard">
                      <h1>Title:{ele.title}</h1>
                      <img style={{ height: "10rem" }} src={ele.image} alt="" />
                      <p>Price:{ele.price}</p>
                      <p>Offprice:{ele.offprice}</p>
                      <p>Fuel Type:{ele.fueltype}</p>
                      <p>Seat:{ele.seat}</p>
                      <p>Car Type:{ele.cartype}</p>
                      <p>Rating:{ele.rating}</p>
                      <p>Distance:{ele.km}</p>
                      <p>Location:{ele.location}</p>
                      <p>Owner:{ele.owner}</p>
                      <div
                        style={{
                          display: "flex",
                          gap: "80px",
                          justifyContent: "center",
                          marginTop: "40px",
                        }}
                      >
                        <Button
                          style={{ color: "white", background: "crimson" }}
                          onClick={() => handleDelete(ele._id)}
                        >
                          Delete
                        </Button>
                        {/* <Button
                          style={{ color: "white", background: "forestgreen" }}
                        >
                          {" "}
                          Update
                        </Button> */}
                        <PopoverForm />
                      </div>
                    </div>
                  </>
                );
              })
            : "Data is Empty"}
        </div>
      </div>
    </>
  );
};

export default Admin;
