import React, { useState } from "react";
import "./countrieslist.css";
import { ListBox } from 'primereact/listbox';
import CO from '../../assets/images/co.svg';
import BO from '../../assets/images/bo.svg';
import BR from '../../assets/images/br.svg';
import CL from '../../assets/images/cl.svg';
import CR from '../../assets/images/cr.svg';
import AR from '../../assets/images/ar.svg';           
import EC from '../../assets/images/ec.svg';
import GT from '../../assets/images/gt.svg';
import HN from '../../assets/images/hn.svg';
import MX from '../../assets/images/mx.svg';
import NI from '../../assets/images/ni.svg';
import PA from '../../assets/images/pa.svg';
import PY from '../../assets/images/py.svg';
import PE from '../../assets/images/pe.svg';
import PR from '../../assets/images/pr.svg';
import UY from '../../assets/images/uy.svg';
import VE from '../../assets/images/ve.svg';

const CountriesList = ({ selectedCountry, onCountryChange }) => {

    const countries = [
        { name: 'Argentina', value: 'AR', img: AR},
        { name: 'Bolivia', value: 'BO', img: BO },
        { name: 'Brasil', value: 'BR', img: BR },
        { name: 'Chile', value: 'CL', img: CL },
        { name: 'Colombia', value: 'CO', img: CO },
        { name: 'Costa Rica', value: 'CR', img: CR },
        { name: 'Ecuador', value: 'EC', img: EC },
        { name: 'Guatemala', value: 'GT', img: GT },
        { name: 'Honduras', value: 'HN', img: HN },
        { name: 'México', value: 'MX', img: MX },
        { name: 'Nicaragua', value: 'NI', img: NI },
        { name: 'Panamá', value: 'PA', img: PA },
        { name: 'Paraguay', value: 'PY', img: PY },
        { name: 'Perú', value: 'PE', img: PE },
        { name: 'Puerto Rico', value: 'PR', img: PR },
        { name: 'Uruguay', value: 'UY', img: UY },
        { name: 'Venezuela', value: 'VE', img: VE }
    ];

    const countryTemplate = (option) => {
        return (
            <div className="country">
                <img alt={option.name} src={option.img}  style={{ width: '1.25rem', marginRight: '.5rem' }}/>
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <h4>Paises</h4>
             <ListBox
                filter
                value={selectedCountry}
                onChange={(e) => onCountryChange(e.value)}
                options={countries}
                optionLabel="name"
                itemTemplate={countryTemplate}
                className="listbox-countries"
                listStyle={{ maxHeight: '250px' }}
            />
        </div>
    );
};

export default CountriesList;