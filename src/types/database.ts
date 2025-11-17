/**
 * Tipos do banco de dados Supabase
 * Gerado automaticamente ou mantido manualmente
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          plan_type: 'free' | 'financeiro' | 'saude' | 'completo'
          subscription_status: 'active' | 'trial' | 'canceled' | 'past_due' | 'expired'
          trial_ends_at: string | null
          subscription_ends_at: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          onboarding_completed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          plan_type?: 'free' | 'financeiro' | 'saude' | 'completo'
          subscription_status?: 'active' | 'trial' | 'canceled' | 'past_due' | 'expired'
          trial_ends_at?: string | null
          subscription_ends_at?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          onboarding_completed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          plan_type?: 'free' | 'financeiro' | 'saude' | 'completo'
          subscription_status?: 'active' | 'trial' | 'canceled' | 'past_due' | 'expired'
          trial_ends_at?: string | null
          subscription_ends_at?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          onboarding_completed?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      plan_permissions: {
        Row: {
          id: string
          plan_type: string
          feature: string
          limit_value: number | null
          enabled: boolean
          created_at: string
        }
        Insert: {
          id?: string
          plan_type: string
          feature: string
          limit_value?: number | null
          enabled?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          plan_type?: string
          feature?: string
          limit_value?: number | null
          enabled?: boolean
          created_at?: string
        }
      }
      financial_transactions: {
        Row: {
          id: string
          user_id: string
          amount: number
          type: 'income' | 'expense'
          category: string
          description: string | null
          date: string
          auto_categorized: boolean
          confidence_score: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          type: 'income' | 'expense'
          category: string
          description?: string | null
          date: string
          auto_categorized?: boolean
          confidence_score?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          type?: 'income' | 'expense'
          category?: string
          description?: string | null
          date?: string
          auto_categorized?: boolean
          confidence_score?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      financial_goals: {
        Row: {
          id: string
          user_id: string
          title: string
          target_amount: number
          current_amount: number
          deadline: string | null
          status: 'active' | 'completed' | 'canceled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          target_amount: number
          current_amount?: number
          deadline?: string | null
          status?: 'active' | 'completed' | 'canceled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          target_amount?: number
          current_amount?: number
          deadline?: string | null
          status?: 'active' | 'completed' | 'canceled'
          created_at?: string
          updated_at?: string
        }
      }
      health_profiles: {
        Row: {
          id: string
          user_id: string
          current_weight: number | null
          target_weight: number | null
          height: number | null
          age: number | null
          gender: 'male' | 'female' | 'other' | null
          activity_level: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active' | null
          dietary_restrictions: string[] | null
          daily_calorie_goal: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          current_weight?: number | null
          target_weight?: number | null
          height?: number | null
          age?: number | null
          gender?: 'male' | 'female' | 'other' | null
          activity_level?: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active' | null
          dietary_restrictions?: string[] | null
          daily_calorie_goal?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          current_weight?: number | null
          target_weight?: number | null
          height?: number | null
          age?: number | null
          gender?: 'male' | 'female' | 'other' | null
          activity_level?: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active' | null
          dietary_restrictions?: string[] | null
          daily_calorie_goal?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      weight_logs: {
        Row: {
          id: string
          user_id: string
          weight: number
          date: string
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          weight: number
          date: string
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          weight?: number
          date?: string
          notes?: string | null
          created_at?: string
        }
      }
      food_photos: {
        Row: {
          id: string
          user_id: string
          image_url: string
          detected_foods: Json
          total_calories_min: number | null
          total_calories_max: number | null
          total_calories_avg: number | null
          confidence_score: number | null
          portion_adjustment: number
          manual_adjustments: Json | null
          meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack' | null
          date: string
          consent_for_training: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          image_url: string
          detected_foods?: Json
          total_calories_min?: number | null
          total_calories_max?: number | null
          total_calories_avg?: number | null
          confidence_score?: number | null
          portion_adjustment?: number
          manual_adjustments?: Json | null
          meal_type?: 'breakfast' | 'lunch' | 'dinner' | 'snack' | null
          date: string
          consent_for_training?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          image_url?: string
          detected_foods?: Json
          total_calories_min?: number | null
          total_calories_max?: number | null
          total_calories_avg?: number | null
          confidence_score?: number | null
          portion_adjustment?: number
          manual_adjustments?: Json | null
          meal_type?: 'breakfast' | 'lunch' | 'dinner' | 'snack' | null
          date?: string
          consent_for_training?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type: string
          title: string
          message: string
          read: boolean
          action_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: string
          title: string
          message: string
          read?: boolean
          action_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: string
          title?: string
          message?: string
          read?: boolean
          action_url?: string | null
          created_at?: string
        }
      }
      achievements: {
        Row: {
          id: string
          user_id: string
          badge_type: string
          title: string
          description: string
          earned_at: string
        }
        Insert: {
          id?: string
          user_id: string
          badge_type: string
          title: string
          description: string
          earned_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          badge_type?: string
          title?: string
          description?: string
          earned_at?: string
        }
      }
      audit_logs: {
        Row: {
          id: string
          user_id: string | null
          action: string
          resource_type: string
          resource_id: string | null
          metadata: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          action: string
          resource_type: string
          resource_id?: string | null
          metadata?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          action?: string
          resource_type?: string
          resource_id?: string | null
          metadata?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
