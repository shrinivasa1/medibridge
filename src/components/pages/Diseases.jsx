import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  Typography,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "../../styles/DiseaseStyles.css";
import bckgrd from "../layout/bckgrd.jpg";

// Doctor Directory
const doctorDirectory = {
  Hyderabad: {
    ayush: [
      { name: "Dr. Asha Sharma", specialization: "Ayurveda", contact: "9876543210", clinic: "Herbal Wellness Center" },
      { name: "Dr. Ravi Kumar", specialization: "Homeopathy", contact: "9871234567", clinic: "Ayush Care" },
    ],
    allopathy: [
      { name: "Dr. Meera Jain", specialization: "Dermatologist", contact: "9812345678", clinic: "City Hospital" },
      { name: "Dr. Anil Reddy", specialization: "Physician", contact: "9845678901", clinic: "Apollo Clinic" },
    ],
  },
  Bangalore: {
    ayush: [
      { name: "Dr. Rekha", specialization: "Ayurveda", contact: "9888777666", clinic: "Ayurveda Bliss" },
    ],
    allopathy: [
      { name: "Dr. Karthik", specialization: "Cardiologist", contact: "9811112233", clinic: "Fortis" },
    ],
  },
};

// Symptom Library
const symptomLibrary = {
  respiratory: ["fever", "cough", "shortness of breath"],
  digestive: ["stomach pain", "diarrhea", "nausea", "constipation"],
  skin: ["itching", "rash", "dandruff"],
  urinary: ["burning sensation", "frequent urination"],
  neurological: ["headache", "sensitivity to light", "back pain"],
  general: ["fatigue", "joint pain", "weight loss", "chills", "calcium deficiency"],
  ENT: ["throat pain", "ear pain", "nosebleeds", "sorethroat"],
};

// Disease Database with weighted symptoms
const diseaseDatabase = [
  {
    name: "Common Cold",
    symptoms: { fever: 0.7, cough: 0.8, "runny nose": 0.9, sneezing: 0.8 },
    ayurveda: "Tulsi tea, turmeric milk, steam inhalation with eucalyptus oil.",
    allopathy: "Antihistamines, paracetamol, decongestants.",
  },
  {
    name: "Flu",
    symptoms: { fever: 0.9, cough: 0.85, headache: 0.8 },
    ayurveda: "Giloy juice, warm kadha, rest, ginger tea.",
    allopathy: "Antiviral medication, paracetamol, hydration, rest.",
  },
  {
    name: "Dengue",
    symptoms: { fatigue: 0.8, "joint pain": 0.9 },
    ayurveda: "Papaya leaf juice, Giloy, coconut water.",
    allopathy: "Paracetamol, fluids, hospital care if severe.",
  },
  {
    name: "Hypothyroidism",
    symptoms: { fatigue: 0.8, "weight loss": 0.7, "joint pain": 0.5 },
    ayurveda: "Ashwagandha, Guggul, iodine-rich foods.",
    allopathy: "Levothyroxine, regular thyroid monitoring.",
  },
  {
    name: "Anemia",
    symptoms: { fatigue: 0.7, chills: 0.6, "weight loss": 0.7 },
    ayurveda: "Beetroot juice, sesame seeds, pomegranate, jaggery.",
    allopathy: "Iron supplements, folic acid, vitamin B12 injections, diet changes.",
  },
  {
    name: "Rheumatoid Arthritis",
    symptoms: { "joint pain": 0.9, "calcium deficiency": 0.7 },
    ayurveda: "Dashmool decoction, turmeric, castor oil massage, yoga.",
    allopathy: "NSAIDs, DMARDs like methotrexate, corticosteroids, physical therapy.",
  },
  {
    name: "COVID-19",
    symptoms: { fever: 0.9, cough: 0.85, "shortness of breath": 0.95 },
    ayurveda: "Ashwagandha, Guduchi, steam inhalation, Chyawanprash.",
    allopathy: "Antiviral drugs, oxygen support, symptomatic treatment.",
  },
  {
    name: "Food Poisoning",
    symptoms: { "stomach pain": 0.9, diarrhea: 0.9 },
    ayurveda: "Buttermilk with ajwain, ginger tea, pomegranate juice.",
    allopathy: "ORS, antibiotics, probiotics, antiemetics.",
  },
  {
    name: "UTI (Urinary Tract Infection)",
    symptoms: { "burning sensation": 0.9, "frequent urination": 0.9 },
    ayurveda: "Punarnava, coriander seed water, barley water.",
    allopathy: "Antibiotics like nitrofurantoin, pain relief meds, fluids.",
  },
  {
    name: "Migraine",
    symptoms: { headache: 0.9, "sensitivity to light": 0.85 },
    ayurveda: "Brahmi, Shankhpushpi, oil massage on scalp, yoga.",
    allopathy: "Pain relievers, triptans, anti-nausea medications.",
  },
  {
    name: "Back Pain",
    symptoms: { "back pain": 0.9, "joint pain": 0.6 },
    ayurveda: "Kati basti therapy, yoga, castor oil massage, turmeric milk.",
    allopathy: "NSAIDs, muscle relaxants, physiotherapy, corticosteroid injections.",
  },
  {
    name: "Psoriasis",
    symptoms: { itching: 0.8, rash: 0.9, dandruff: 0.7 },
    ayurveda: "Neem and turmeric paste, Panchakarma, aloe vera, coconut oil.",
    allopathy: "Topical corticosteroids, vitamin D analogues, immunosuppressants.",
  },
  {
    name: "Pharyngitis / Tonsillitis",
    symptoms: { sorethroat: 0.9, "throat pain": 0.9, "swollen lymph nodes": 0.8 },
    ayurveda: "Yashtimadhu, Talisadi Churna, honey, warm water gargles",
    allopathy: "Antibiotics, lozenges, warm saline gargles",
  },
  {
    name: "Epistaxis",
    symptoms: { nosebleeds: 1.0 },
    ayurveda: "Draksha, Gulkand, cold water splash, Sandal paste on forehead",
    allopathy: "Pinch nose, nasal packing, cautery, manage BP",
  },
  {
    name: "Otitis Media (Ear infection)",
    symptoms: { "ear pain": 1.0 },
    ayurveda: "Karna Purana (medicated oil in ears), Dashamoola, Bala Taila",
    allopathy: "Antibiotics, ear drops, analgesics",
  },
];

const Diseases = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
    setSelectedSymptoms([]);
    setPredictions([]);
    setSelectedCity("");
  };

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  };

  const findDisease = () => {
    const matches = diseaseDatabase
      .map((disease) => {
        const totalWeight = Object.values(disease.symptoms).reduce((acc, w) => acc + w, 0);
        const matchedWeight = Object.entries(disease.symptoms).reduce((acc, [symptom, weight]) => {
          return selectedSymptoms.includes(symptom.toLowerCase()) ? acc + weight : acc;
        }, 0);

        const matchPercentage = totalWeight > 0 ? (matchedWeight / totalWeight) * 100 : 0;

        return { ...disease, matchPercentage: Math.round(matchPercentage) };
      })
      .filter((d) => d.matchPercentage > 0)
      .sort((a, b) => b.matchPercentage - a.matchPercentage)
      .slice(0, 3);

    setPredictions(matches);
  };

  return (
    <Layout>
      {/* Set paddingTop to navbar height 64px, minHeight fills viewport below navbar */}
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          width: "100%",
          paddingTop: "64px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="disease-page"
          style={{
            backgroundImage: `url(${bckgrd})`,
            backgroundSize: "cover",
            padding: "20px",
            position: "relative",
            minHeight: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={900}
            style={{ color: "#ffd740", marginBottom: "10px" }}
          >
            Symptom Based Disease Prediction
          </Typography>

          <FormControl sx={{ minWidth: 200, mb: 2 }}>
            <InputLabel>Symptom Area</InputLabel>
            <Select value={selectedArea} onChange={handleAreaChange} label="Symptom Area">
              <MenuItem value="">Select Area</MenuItem>
              {Object.keys(symptomLibrary).map((area) => (
                <MenuItem key={area} value={area}>
                  {area.charAt(0).toUpperCase() + area.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedArea && (
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.9)",
                borderRadius: 1,
                padding: 2,
                maxWidth: 600,
                mb: 2,
                mx: "auto",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Select Symptoms:
              </Typography>
              {symptomLibrary[selectedArea].map((symptom) => (
                <FormControlLabel
                  key={symptom}
                  control={
                    <Checkbox
                      checked={selectedSymptoms.includes(symptom)}
                      onChange={() => handleSymptomToggle(symptom)}
                      sx={{ color: "#ffd740" }}
                    />
                  }
                  label={symptom.charAt(0).toUpperCase() + symptom.slice(1)}
                />
              ))}
            </Box>
          )}

          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={findDisease}
              disabled={selectedSymptoms.length === 0}
              sx={{ mb: 3 }}
            >
              Predict Disease
            </Button>
          </Box>

          {predictions.length > 0 && (
            <Box
              sx={{
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: 2,
                color: "#fff",
                p: 3,
                maxWidth: 800,
                mx: "auto",
              }}
            >
              <Typography variant="h5" mb={2}>
                Prediction Results
              </Typography>

              {predictions.map(({ name, matchPercentage, ayurveda, allopathy }) => (
                <Box key={name} mb={3} sx={{ borderBottom: "1px solid #fff", pb: 2 }}>
                  <Typography variant="h6" fontWeight="bold" color="#ffd740">
                    {name} - Match: {matchPercentage}%
                  </Typography>

                  <Typography variant="subtitle1" fontWeight={600} mt={1}>
                    Ayurvedic Treatment:
                  </Typography>
                  <Typography sx={{ fontStyle: "italic", mb: 1 }}>{ayurveda}</Typography>

                  <Typography variant="subtitle1" fontWeight={600}>
                    Allopathic Treatment:
                  </Typography>
                  <Typography sx={{ fontStyle: "italic" }}>{allopathy}</Typography>
                </Box>
              ))}

              <Typography variant="h6" mt={4} mb={1}>
                Find a Doctor in Your City:
              </Typography>

              <FormControl sx={{ minWidth: 200, mb: 2 }}>
                <InputLabel>City</InputLabel>
                <Select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  label="City"
                >
                  <MenuItem value="">Select City</MenuItem>
                  {Object.keys(doctorDirectory).map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {selectedCity && (
                <Box sx={{ maxWidth: 600, mt: 2 }}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Ayurvedic Doctors:
                  </Typography>
                  {doctorDirectory[selectedCity].ayush.length === 0 && (
                    <Typography>No Ayurvedic doctors found in {selectedCity}.</Typography>
                  )}
                  {doctorDirectory[selectedCity].ayush.map((doc, idx) => (
                    <Box key={idx} mb={1} sx={{ pl: 2 }}>
                      <Typography>{doc.name} - {doc.specialization}</Typography>
                      <Typography>Contact: {doc.contact}</Typography>
                      <Typography>Clinic: {doc.clinic}</Typography>
                    </Box>
                  ))}

                  <Typography variant="subtitle1" fontWeight={600} mt={3}>
                    Allopathic Doctors:
                  </Typography>
                  {doctorDirectory[selectedCity].allopathy.length === 0 && (
                    <Typography>No Allopathic doctors found in {selectedCity}.</Typography>
                  )}
                  {doctorDirectory[selectedCity].allopathy.map((doc, idx) => (
                    <Box key={idx} mb={1} sx={{ pl: 2 }}>
                      <Typography>{doc.name} - {doc.specialization}</Typography>
                      <Typography>Contact: {doc.contact}</Typography>
                      <Typography>Clinic: {doc.clinic}</Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          )}
        </div>
      </Box>
    </Layout>
  );
};

export default Diseases;
