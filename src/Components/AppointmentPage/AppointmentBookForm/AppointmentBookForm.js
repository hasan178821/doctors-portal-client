import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width: '500px',
      padding: '15px 35px'
    }
  };

  Modal.setAppElement('#root')

const AppointmentBookForm = ({modalIsOpen, closeModal, bookCard, date}) => {  
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = bookCard.name;
        data.date = date;
        data.created = new Date();
        
        fetch('http://localhost:5050/addAppointment', {
            method: 'POST',
            headers: {
                'Content-Type' : 'Application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Thanks for Creating Appointment')
            }
        })
    };

    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <h4 className="text-center text-brand">{bookCard.name}</h4>
        <p className="text-center text-brand">{date.toDateString()}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="name" placeholder="Your Name" {...register("name")} />
            {errors.text && <span>This field is required</span>}

            <input type="email" name="email" placeholder="Your E-mail" {...register("email")} />
            {errors.email && <span>This field is required</span>}

            <input type="text" name="phone" placeholder="Your Phone" {...register("phone")} />
            {errors.text && <span>This field is required</span>}

            <div className="d-flex justify-content-between">
                <div className="form-group w-25 h-25">
                    <select className="form-select form-control" id="inputGroupSelect04" name="gender" {...register("gender")} aria-label="Example select with button addon">
                        <option value="Male">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <input type="text" name="Age" className="w-25 h-25" placeholder="Your Age" {...register("Age")} />

                <input type="text" name="weight" className="w-25 h-25" placeholder="Weight" {...register("weight")} />
            </div>

            <br/>
                <input type="submit" className="btn brand-button w-50"/>
        </form>
        </Modal>
        </div>
    );
};

export default AppointmentBookForm;