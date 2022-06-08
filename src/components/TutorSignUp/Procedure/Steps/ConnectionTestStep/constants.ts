export type Phase = "overview" | "testing" | "complete";

export interface PhaseProps {
  handleGoToNextPhase: (currentPhase: Phase) => void;
}
