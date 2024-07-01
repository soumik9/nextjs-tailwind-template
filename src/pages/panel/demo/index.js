import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import PrimaryButton from '@/components/Button/PrimaryButton';
import SecondaryButton from '@/components/Button/SecondaryButton';
import Input from '@/components/Froms/Input';
import SelectCustom from '@/components/Froms/SelectCustom';
import Textarea from '@/components/Froms/Textarea';
import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import { fruitOptions } from '@/utils/constant/data';
import { DASHBOARD_LINKS, DEMO_LINKS } from '@/utils/enum/link';
import React, { useState } from 'react';
import { AiOutlineHistory } from 'react-icons/ai';

const DemoPage = () => {

    const [selectedFruit, setSelectedFruit] = useState(fruitOptions[0]);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Breadcrumb
                title='Demo'
                getLinks={[
                    { url: DEMO_LINKS.DEMO, text: 'Demo', isActive: true }
                ]}
                nextPageText='Dashboard'
                nextPageLink={DASHBOARD_LINKS.DASHBOARD}
            />

            <CardLayout isNotInitalized title="Input">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <Input label="Disabled" disabled />
                    <Input label="Name" />
                    <Input label="Name" error="Name is required" />
                    <Input
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        passwordToggle
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />

                    <Textarea label="Description" divCss="lg:col-span-2" />
                </div>
            </CardLayout>

            <CardLayout isNotInitalized title="Select">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <SelectCustom
                        label="Select Fruit"
                        options={fruitOptions}
                        selectedFruit={selectedFruit}
                        setSelectedFruit={setSelectedFruit}
                    />

                    <SelectCustom
                        label="Error"
                        options={fruitOptions}
                        selectedFruit={selectedFruit}
                        setSelectedFruit={setSelectedFruit}
                        error="Value required"
                    />

                    <SelectCustom
                        label="Search on select list"
                        options={fruitOptions}
                        selectedFruit={selectedFruit}
                        setSelectedFruit={setSelectedFruit}
                        isSearchable
                    />

                    <SelectCustom
                        label="Required"
                        options={fruitOptions}
                        selectedFruit={selectedFruit}
                        setSelectedFruit={setSelectedFruit}
                        required
                    />
                </div>
            </CardLayout>

            <CardLayout isNotInitalized title="Button">
                <div className='flex flex-wrap justify-between gap-3'>
                    <PrimaryButton text="Primary Button" />
                    <PrimaryButton text="Disabled Button" disabled />
                    <PrimaryButton text="Loading Button" loadingText="Loading" isLoading={true} />
                    <PrimaryButton text="Outline Primary Button" variant css="" />
                    <PrimaryButton text="Start Icon" startIcon={<AiOutlineHistory />} />
                    <PrimaryButton text="End Icon" endIcon={<AiOutlineHistory />} />

                    <SecondaryButton text='Secondary Button' />
                    <SecondaryButton text='Disabled Button' disabled />
                    <SecondaryButton text='Loading Button' loadingText="Loading" isLoading={true} />
                    <SecondaryButton text="Outline Primary Button" variant />
                    <SecondaryButton text="Start Icon" startIcon={<AiOutlineHistory />} />
                    <SecondaryButton text="End Icon" endIcon={<AiOutlineHistory />} />
                </div>
            </CardLayout>

        </>
    );
};

export default DemoPage;