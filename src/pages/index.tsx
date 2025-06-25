import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PreviewHeart from '../components/SetupLanding/PreviewHeart';
import FeatureList from '../components/SetupLanding/FeatureList';

/**
 * Setup Landing Page
 * 
 * This page is displayed during the initial project setup, showing a preview status
 * and a list of key features or setup steps.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <PreviewHeart />
      <FeatureList />
    </MainAppLayout>
  );
};

export default IndexPage;
